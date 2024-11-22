import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { Container } from "@/ui/components/container/container";

interface Props {
  titre: string;
  montant?: number;
  solde?: number;
  accountnumber?: number;
  nameUser?: string;
  typeCarte?: "visa" | "master";
  expiration?: "10/26";
  bankName?:string;
  cvv?:number
  accountname?:string
  accountprenom?:string
}

export const CarteVisa = ({
  titre,
  montant = 20000,
  solde = 20000,
  accountnumber ,
  nameUser = "Card Holder ",
  typeCarte = "visa",
  expiration = "10/26",
  bankName = "CITi Bank",
  cvv = 123,
  accountname,
  accountprenom,
}: Props) => {
  const handleDepot = () => {
    // Fonction de dépôt
    console.log("Dépôt");
  };

  return (
    <Box className="relative  flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-30 max-w-sm mx-auto mt-10">
      {/* Image de fond */}
      <Image
        src="/assets/images/leocard.jpg"
        width={400}
        height={200}
        alt="Card background"
        className="absolute inset-0 h-[250px] w-full object-cover rounded-2xl opacity-90"
      />
      
      {/* Contenu de la carte */}
      <div className="relative h-64 space-y-6 text-white z-10">
        {/* Informations de la banque */}
        <Container className="grid grid-cols-12">
          <div className="col-span-6 flex items-center">
            <Typography variant="body-sm" component="p" theme="white">
              {bankName}
            </Typography>
          </div>
          <div className="col-span-6 flex justify-end items-center">
            <Typography theme="white" variant="body-base" component="p">
              {typeCarte.toUpperCase()}
            </Typography>
          </div>
        </Container>

        {/* Numéro de carte */}
        <Container className="grid grid-cols-12">
          <div className="col-span-6 flex items-center">
            <Typography variant="body-sm" component="p" theme="white">
              {accountnumber}
            </Typography>
          </div>
          <div className="col-span-6 flex justify-end items-center">
            <Typography theme="white" variant="body-base" component="p">
              CVV: {cvv}
            </Typography>
          </div>
        </Container>

        {/* Informations utilisateur */}
        <Container className="grid grid-cols-12">
          <div className="col-span-9 flex items-center">
            <Typography variant="body-sm" component="p" theme="white">
            {nameUser }{": "} {accountname }{" "}{ accountprenom}
             </Typography>
          </div>
          <div className="col-span-3 flex justify-end items-left">
            <Typography theme="white" variant="body-base" component="p">
              Expire Date: {expiration}
            </Typography>
          </div>
        </Container>
      </div>
    </Box>
  );
};
