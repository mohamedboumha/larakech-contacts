import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

const url = "https://api-v2.hopcrm.com/api/mobile/contacts";

interface CardInfo {
  key: string;
  value: any;
}
interface Contacts {
  cle: string;
  entreprise: string;
  nom: string;
  prenom: string;
  statut_couleur: string;
  statut_label: string;
}

const useFetch = () => {
  const [contacts, setContacts] = useState<Contacts[] | null>(null);
  const [contact, setContact] = useState<null>(null);
  const [sessionInfo, setSessionInfo] = useState<null | object>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cardsInfo, setCardsInfo] = useState<CardInfo[] | null>(null);

  const getContacts = async () => {
    try {
      setIsLoading(true);
      const { data }: AxiosResponse = await axios(url);
      setContacts(data.data);
      setIsLoading(false);
      return data;
    } catch (error) {
      setError("error message");
    }
  };

  const getContact = async (contactID: string) => {
    try {
      setIsLoading(true);
      const response: AxiosResponse = await axios.get(url + `/${contactID}`);
      setContact(response.data);
      setIsLoading(false);
      return response;
    } catch (error) {
      setError("error message");
    }
  };

  const getCardsInfo = async () => {
    try {
      setIsLoading(true);
      const response: AxiosResponse = await axios.get(
        "https://api-v2.hopcrm.com/api/mobile/infos/volumetrie"
      );
      const transformedArray = Object.entries(response.data).map(
        ([key, value]) => {
          return { key, value };
        }
      );
      setCardsInfo(transformedArray);
      setIsLoading(false);
      return response;
    } catch (error) {
      setError("error message");
    }
  };

  const getSessionInfo = async () => {
    try {
      setIsLoading(true);
      const response: AxiosResponse = await axios.get(
        "https://api-v2.hopcrm.com/api/mobile/sessions/infos"
      );
      setSessionInfo(response.data);
      setIsLoading(false);
      return response;
    } catch (error) {
      setError("error message");
    }
  };

  return {
    getContacts,
    getContact,
    getCardsInfo,
    getSessionInfo,
    contacts,
    contact,
    isLoading,
    error,
    cardsInfo,
    sessionInfo,
  };
};

export default useFetch;
