import { toast } from "react-toastify";

function useToastify() {
  const notify = (notificationText, response) => {
    if (response === "success")
      toast.success(` ${notificationText}!`, {
        position: "top-center",
        className: "toast-message",
      });
    else {
      toast.error(` ${notificationText}!`, {
        position: "top-center",
        className: "toast-message",
      });
    }
  };
  return {
    notify,
  };
}

export default useToastify;
