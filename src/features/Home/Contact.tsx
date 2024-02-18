import Text from "../../components/Text";

const Contact = () => {
  return (
    <div className="sb-layout">
      <Text variant="h1">Contact</Text>
      <div>
        <Text variant="h3">Email</Text>
        <Text>sujaibeniks001@gmail.com</Text>
      </div>

      <div>
        <Text variant="h3">Mobile</Text>
        <Text>8220752490</Text>
      </div>

      <div>
        <Text variant="h3">Facebook</Text>
        <Text>https://m.facebook.com/sujai.beniks.5</Text>
      </div>

      {/* <div>
        <Text variant="h3">Instagram</Text>
        <Text>https://www.instagram.com/__silent___eyes____/</Text>
      </div> */}

      <div>
        <Text variant="h3">Linked In</Text>
        <Text>https://www.linkedin.com/mwlite/in/sujai-beniks-j-89693616b</Text>
      </div>

      <div>
        <Text variant="h3">Github</Text>
        <Text>https://github.com/Sujai123/</Text>
      </div>
    </div>
  );
};

export default Contact;
