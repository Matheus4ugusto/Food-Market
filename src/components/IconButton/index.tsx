import { Button } from "../Button";
import { IconType } from "react-icons";

export interface iIconButtoProps {
  icon: IconType;
}

const IconButton: React.FC<iIconButtoProps> = ({ icon: Icon }) => (
  <Button variant="icon-button">
    <Icon />
  </Button>
);

export default IconButton;
