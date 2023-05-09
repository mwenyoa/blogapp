
export const convertDate = (date: string | number | Date) => {
    const event = new Date(date);
    const options: any = { year: "numeric", month: "long", day: "numeric" };
    return event.toLocaleDateString("en-GB", options).replace(/ /g, " ");
  };

  export const navigate = (path: string) => {
     window.location.reload();
    return window.location.replace(path);
  }