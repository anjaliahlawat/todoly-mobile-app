type ContextType = {
  user: string | null;
  setUser: (user: string | null) => void;
};

type RegisterProps = {
  username?: string;
  phoneNumber?: string;
  email: string;
  password: string;
};
