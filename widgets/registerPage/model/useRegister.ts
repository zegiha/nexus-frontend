import {useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'

export default function useRegister() {
  const router = useRouter();
  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    if(step > 3)
      router.push("/auth/login")
  }, [step]);

  const [email, setEmail] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const next = () => {
    setStep(p => p + 1)
  }

  const back = () => {
    setStep(p => Math.max(p - 1, 1))
  }

  return {
    email, setEmail,
    code, setCode,
    id, setId,
    password, setPassword,
    step,
    next, back,
  }
}