"use client";
import dynamic from "next/dynamic";
import React from "react";
import ChartOne from "@/ui/components/Charts/ChartOne";
import ChartTwo from "@/ui/components/Charts/ChartTwo";
import ChatCard from "@/ui/components/Chat/ChatCard";
import TableOne from "@/ui/components/Tables/TableOne";
import CardDataStats from "@/ui/components/CardDataStats";
import { Button } from "@/ui/design-system/button/button";
import { Ri24HoursFill, RiEye2Fill, RiEyeFill, RiSearchEyeFill } from "react-icons/ri";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import Image from  "next/image"
import { CarteVisa } from "@/ui/components/cards/cards-visa";
import DefaultLayout from "@/ui/components/Breadcrumbs/Layouts/DefaultLayout";

const MapOne = dynamic(() => import("@/ui/components/Maps/MapOne"), {
  ssr: false,
});
 
const ChartThree = dynamic(() => import("@/ui/components/Charts/ChartThree"), {
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