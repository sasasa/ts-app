import { useState, } from 'react'
import type { Pref, District } from '../types/pref'
import axios from 'axios'

export const useFetchPref = () => {
  const [pref, setPref] = useState<Pref>({});
  const [districts, setDistricts] = useState<District[]>([]);
  const [isPrefLoading, setIsPrefLoading] = useState<boolean>(false);
  const [isDistrictLoading, setIsDistrictLoading] = useState<boolean>(false);
  const fetchPref = () => {
    setIsPrefLoading(true)
    axios.get<Pref>("https://geolonia.github.io/japanese-addresses/api/ja.json").then((res)=>{
      setPref(res.data)
    }).
    catch(() => alert('Error') ).
    finally(() => setIsPrefLoading(false) )
  }
  const fetchDistricts = (pref: string, area: string) => {
    setIsDistrictLoading(true)
    axios.get<District[]>(`https://geolonia.github.io/japanese-addresses/api/ja/${encodeURIComponent(pref)}/${encodeURIComponent(area)}.json`).then((res)=>{
      setDistricts(res.data)
    }).
    catch(() => alert('Error') ).
    finally(() => setIsDistrictLoading(false) )
  }

  return { pref, fetchPref, isPrefLoading, fetchDistricts, districts, isDistrictLoading }
};