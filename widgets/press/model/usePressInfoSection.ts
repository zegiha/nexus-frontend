'use client'

import { useCompanyControllerGetCompany } from "@/entity/api/company/company"
import { ICompanyName } from "../const/ICompanyName"

export default function usePressInfoSection({name}: ICompanyName) {
  const queryRes = useCompanyControllerGetCompany(
    name,
    {
      query: {
        queryKey: [`press-${name}`]
      }
    }
  )

  return {
    ...queryRes
  }
}