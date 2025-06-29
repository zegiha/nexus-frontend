'use client'

import { useCompanyControllerGetCompanyCategories } from "@/entity/api/company/company";
import { ICompanyName } from "../const/ICompanyName";
import { useState } from "react"

export default function useSegmentSection({name}: ICompanyName) {
  const [active, setActive] = useState<number>(0)
  const queryRes = useCompanyControllerGetCompanyCategories(
    name,
    {
      query: {
        select: v => {
          return ['전체', ...v]
        }
      }
    }
  )

  return {
    active, setActive,
    ...queryRes,
  }
}