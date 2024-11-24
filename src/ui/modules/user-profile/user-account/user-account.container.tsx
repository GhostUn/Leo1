"use client";
import dynamic from "next/dynamic";
import CardDataStats from "@/ui/components/CardDataStats";
import { Button } from "@/ui/design-system/button/button";
import { RiEyeFill } from "react-icons/ri";
import { CarteVisa } from "@/ui/components/cards/cards-visa";
import DefaultLayout from "@/ui/components/Breadcrumbs/Layouts/DefaultLayout";

const MapOne = dynamic(() => import("@/ui/components/Maps/MapOne"), {
  ssr: false,
});
 

export const UserAccountContainer= () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 m-5 p-3">
      <CardDataStats title="Solde" total="$45,2K" rate="4.35%" levelUp>
            <Button variant="ico" icon={{icon:RiEyeFill}} size="small">
            </Button>
        </CardDataStats>

        <CardDataStats title="Depot" total="$45,2K" rate="4.35%" levelUp>
            <Button variant="ico" icon={{icon:RiEyeFill}} size="small">
            </Button>
        </CardDataStats>

        <CardDataStats title="retrait" total="$45,2K" rate="4.35%" levelUp>
            <Button variant="ico" icon={{icon:RiEyeFill}} size="small">
            </Button>
        </CardDataStats>


      <CardDataStats title="Disponibles" total="$45,2K" rate="4.35%" levelUp>
            <Button variant="ico" icon={{icon:RiEyeFill}} size="small">
            </Button>
        </CardDataStats>
      </div>

      
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 xl:grid-cols-4.2 2xl:gap-7.5 m-5 p-3">


      <CarteVisa titre="paris" montant={20000}/>
      <CarteVisa titre="paris" montant={20000}/>
      <CarteVisa titre="paris" montant={20000}/>

      </div>
      
    </DefaultLayout>
  );
};