
import Navbar from "@/layout/Navbar";
import Header from "@/components/Header";
import { BreadcrumbLink } from "@/components/Header";

import EnginyeriaInformatica from "@/assets/images/estudis/graus/informatica.jpg";
import Matematiques from "@/assets/images/estudis/graus/matematiques.jpg";

import MatesInfo from "@/assets/images/estudis/doble/matesinfo.jpeg";
import MatesFisica from "@/assets/images/estudis/doble/matesfisica.jpeg";
import MatesADE from "@/assets/images/estudis/doble/matesade.jpeg";

import MasterCienciaDades from "@/assets/images/estudis/masters/mastercienciadades.jpeg";
import MasterInteligencia from "@/assets/images/estudis/masters/masterinteligencia.jpg";
import MasterMates from "@/assets/images/estudis/masters/mastermates.jpeg";
import Biomedical from "@/assets/images/estudis/masters/biomedical2.jpg";

import MasterLogica from "@/assets/images/estudis/altres-masters/masterlogica.jpg";
import MasterEstadistica from "@/assets/images/estudis/altres-masters/masterestadistica.jpeg";
import MasterHistoria from "@/assets/images/estudis/altres-masters/masterhistoria.jpg";
import MasterProfe from "@/assets/images/estudis/altres-masters/masterprofe.jpg";

import MasterPropiDatascience from "@/assets/images/estudis/masters-propis/datascience.jpg";

import DoctoratMatesInfo from "@/assets/images/estudis/doctorats/doctorat.jpg";
import DoctoratCienciesAplicades from "@/assets/images/estudis/doctorats/doctorat2.jpg";
import DoctoratHistoria from "@/assets/images/estudis/doctorats/historia.jpg";

import Layout from "@/layout/Layout";
import Sections, { Section } from "@/layout/Sections";
import { MenuItem } from "@/components/SideMenu";

export default function Estudis() {
  const breadcrumbs: BreadcrumbLink[] = [
    {
      title: "Inici",
      url: "https://web.ub.edu/",
    },
    {
      title: "Facultat de Matemàtiques i Informàtica",
      url: "/",
    },
  ];

  const sideMenu: MenuItem[] = [
    {
      title: "Graus de la Facultat",
      children: [
        {
          title: "Enginyeria Informàtica",
        },
        {
          title: "Matemàtiques",
        },
      ],
    },
    {
      title: "Graus simultanis",
      children: [
        {
          title: "Matemàtiques i Física",
        },
        {
          title: "Matemàtiques i Eng. Informàtica",
        },
        {
          title: "Matemàtiques i ADE"
        },
      ],
    },
    {
      title: "Màsters",
      children: [
        {
          title: "Matemàtica avançada",
        },
        {
          title: "Master in Artificial Intelligence",
        },
        {
          title: "Data Science",
        },
        {
          title: "Biomedical Data Science",
        },
        {
          title: "Computer Vision",
        },
      ],
    },
    {
      title: "Doctorat",
      children: [
        {
          title: "Matemàtiques i Informàtica",
        },
        {
          title: "Enginyeria i Ciències Aplicades",
        },
        {
          title: "Història de la Ciència",
        },
      ],
    },
    {
      title: "Postgraus",
    },
    {
      title: "Tràmits administratius",
    },
  ];

  const sections: Section[] = [
    {
      title: "Graus",
      description:
        "Els dos graus que es cursen a la Facultat de Matemàtiques i Informàtica:",
      elements: [
        {
          title: "Enginyeria informàtica",
          img: EnginyeriaInformatica,
        },
        {
          title: "Matemàtiques",
          img: Matematiques,
        },
      ],
    },
    {
      title: "Itineraris de graus simultanis",
      description:
        "A la Universitat de Barcelona hem previst uns itineraris que et permetran de cursar en cinc anys més el treball de fi de grau (18 crèdits) els estudis de Matemàtiques i Enginyeria Informàtica, els de Matemàtiques i Física o els de Matemàtiques i ADE, simultàniament. Per fer-ho, hauràs de completar un total de 318 crèdits i cursar assignatures dels dos graus. Si vols més informació sobre aquesta opció, pots consultar-la a:",
      elements: [
        {
          title: "Matemàtiques + Enginyeria informàtica",
          img: MatesInfo,
        },
        {
          title: "Matemàtiques + Física",
          img: MatesFisica,
        },
        {
          title: "Matemàtiques + ADE",
          img: MatesADE,
        },
      ],
    },
    {
      title: "Màsters de la Facultat",
      elements: [
        {
          title: "Fonaments de la ciència de dades",
          img: MasterCienciaDades,
        },
        {
          title: "Intel·ligència artificial",
          img: MasterInteligencia,
        },
        {
          title: "Matemàtica avançada",
          img: MasterMates,
        },
        {
          title: "Biomedical Data Science",
          img: Biomedical,
        },
      ],
    },
    {
      title: "Altres màsters on participa professor de la Facultat",
      elements: [
        {
          title: "Lògica pura i aplicada",
          img: MasterLogica,
        },
        {
          title: "Estadística i investigació operativa",
          img: MasterEstadistica,
        },
        {
          title: "Història de la ciència: ciència, història i societat",
          img: MasterHistoria,
        },
        {
          title: "Màster de formació del professorat (Matemàtiques)",
          img: MasterProfe,
        },
      ],
    },
    {
      title: "Màsters i postgraus propis",
      description: "Per a titulats universitaris",
      elements: [
        {
          title:
            "Introducció a la Data Science i al Machine Learning (Presencial)",
          img: MasterPropiDatascience,
        },
        {
          title:
            "Introducció a la Data Science i al Machine Learning (A distància)",
          img: MasterPropiDatascience,
        },
      ],
    },
    {
      title: "Programes de doctorat",
      description:
        "Els programes de doctorat tenen com a objectiu la formació avançada en una de les seves línies de recerca per a la realització d’una tesi doctoral conduent a l'obtenció del títol de doctor per la Universitat de Barcelona dins de cada programa.",
      elements: [
        {
          title: "Matemàtiques i Informàtica",
          img: DoctoratMatesInfo,
        },
        {
          title: "Enginyeria i ciències aplicades",
          img: DoctoratCienciesAplicades,
        },
        {
          title: "Història de la ciència",
          img: DoctoratHistoria,
        },
      ],
    },
  ];

  return (
    <>
    <Navbar />
    <Header
      title="Estudis"
      breadcrumbs={breadcrumbs}
    />
    <Layout menu={sideMenu}>
      <p className="mb-6">
        {`La Facultat de Matemàtiques i Informàtica de la UB ofereix dos graus, tres dobles graus, tres màsters i està involucrada en els programes de doctorat de Matemàtiques i d'Enginyeries`}
      </p>
      <Sections sections={sections} />
    </Layout>
    </>
  );
}


export const metadata = {
  title: "Estudis | Facultat de Matemàtiques i Informàtica"
}