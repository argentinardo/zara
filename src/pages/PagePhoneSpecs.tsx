import { useParams } from "react-router-dom"
import PhoneSpecs from "@/components/PhoneSpecs"

const PagePhoneSpecs = () => {
  const { id } = useParams<{ id: string }>()

  if (!id) return null

  return <PhoneSpecs id={id} />
}
export default PagePhoneSpecs