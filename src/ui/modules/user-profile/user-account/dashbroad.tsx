"use client";
import { useEffect, useState } from "react";
import { Button } from "@/ui/design-system/button/button";
import { RiCashFill } from "react-icons/ri";
import { CarteVisa } from "@/ui/components/cards/cards-visa";
import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "@/ui/components/container/container";
import { RiArrowUpWideFill } from "react-icons/ri";
import { useAuth } from "@/context/AuthUserContext";
import Link from "next/link";
interface Props {
  montant?: number;
  solde?: number;
  accountnumber?: string;
  nameUser?: string;
  statut?:string;
  
}


export const Dashboard= ({
  
  montant = 20000, //authUser.montant
  solde = 20000,
  statut,
  
}:Props) => {
  
const handleActivecarte = ()=>{

}
  const { authUser } = useAuth();
console.log('authUser dash', authUser)
const images = [
  "/assets/images/leo01.jpg",
  "/assets/images/leo01.jpg",
  "/assets/images/leo01.jpg",
];

//  const [isBlinking, setIsBlinking] = useState(true);
/*
  useEffect(() => {
    // Arrêter le clignotement si le statut de l'utilisateur est "valider"
    if (authUser && authUser.statut === "valider") {
      setIsBlinking(false);
    }
  }, [authUser]);
  */
  return (
    <>  
      <CarteVisa accountname={authUser?.nom }  accountprenom={ authUser?.prenom} cvv={authUser?.cvv} typeCarte={"visa"}  accountnumber ={ authUser?.accountnumber}titre="paris" montant={authUser?.solde_compte}  />
      <Container className="grid grid-cols-12 mb-1">
           {/* Solde */}
        <div className="text-center mt-4 col-span-6">
          <Typography variant="body-lg" component="p" theme="gray">
            Account number : 
          </Typography>
        </div>
          <div className="col-span-5 flex justify-end items-center">
            <Typography theme="gray" variant="body-base" component="p">
            {authUser?.accountnumber}
            </Typography>
          </div>
          <div className="col-span-5 flex justify-end items-center">
           
          </div>
        </Container>



        <Container className="grid grid-cols-12 mb-1">
           {/* Solde */}
        <div className="text-center mt-4 col-span-6">
          <Typography variant="body-lg" component="p" theme="gray">
            Account Name:  
          </Typography>
        </div>
          <div className="col-span-5 flex justify-end items-center">
            <Typography theme="gray" variant="body-base" component="p">
              {authUser?.nom } { authUser?.prenom}
            </Typography>
          </div>
          <div className="col-span-5 flex justify-end items-center">
           
          </div>
        </Container>
        {/**solde */}
        <Container className="mb-10">
        <div className="mx-auto mb-5.5 mt-4.5 grid max-w-94 grid-cols-2 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
                <div className="flex flex-col items-center justify-right gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                  <Typography variant="body-lg" component="p" theme="gray">
                        Solde Compte : 
                    <Typography variant="h3" component="span" theme="white" className=" justify-center items-center mr-10 p-10 ">
                        {authUser?.solde_compte} 
                    </Typography>
                          USD
                  </Typography>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                  <span className="font-semibold text-black dark:text-white">
                  </span>
                  <Typography variant="body-lg" component="p" theme="gray">
                        Solde Carte : 
                    <Typography variant="h3" component="span" theme="white" className=" justify-center items-center mr-10 p-10 ">
                        {authUser?.solde_carte} 
                    </Typography>
                          USD
                  </Typography>
                </div>
                
              </div>
        </Container>
        <Container className="mb-10">
        <div className="mx-auto mb-5.5 mt-4.5 grid max-w-94 grid-cols-2 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
                <div className="flex flex-col items-center justify-right gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <Typography component="span" className="font-semibold text-black dark:text-white">
                     
                    <Link href="/mon-espace/wallet">
                      <Button variant="ico" icon={{icon: RiCashFill} }></Button>
                    </Link>
                  </Typography>
                  <Typography component="span" className="text-sm text-black dark:text-white">
                    
                      Activer ma carte 
                  </Typography>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                  <span className="font-semibold text-black dark:text-white">
                  </span>
                  <Typography component="span" className="font-semibold text-black dark:text-white">

                    <Link href="/mon-espace/retrait">
                        <Button variant="ico" icon={{icon: RiArrowUpWideFill} } ></Button>
                      </Link>


                  </Typography>
                  <Typography component="span" className="text-sm text-black dark:text-white">
                      Retrait
                  </Typography>
                </div>
                
              </div>

        </Container>
    </>
      
   
  );
};