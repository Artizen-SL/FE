import { useNavigate } from "react-router-dom"
import InfoSearchInput from "./Presenters/InfoSearchInput"

const InfoInput = () => {
    const navigate = useNavigate();
  return <InfoSearchInput navigate={navigate}/>;
}

export default InfoInput
