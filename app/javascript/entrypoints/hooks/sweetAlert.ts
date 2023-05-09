import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

type Props = {};

interface SweetAlertProps {
  title: string;
  text: string | never;
  icon: any;
  time: number;
}

const useSweetAlert = (props: Props) => {
  const ShowAlert:any = ({ title, text, icon, time }: SweetAlertProps) => {
    MySwal.fire({
      title: title,
      text: text,
      icon: icon,
      timer: time,
      showConfirmButton: false,
      timerProgressBar: true,
    });
  };

  return {
    ShowAlert,
  };
};

export default useSweetAlert;