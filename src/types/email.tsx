export type emailParams = {
  service_id: string;
  template_id: string;
  user_id: string;
  template_params: {
    sender: string;
    email: string;
    phone: string;
    message: string;
    first: string;
    last: string;
  };
};
