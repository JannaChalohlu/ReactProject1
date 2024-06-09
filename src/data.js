import {v4 as uuid4} from "uuid";
import kaberneFran from "./images/red/kaberne-fran.png";
import kaberneSovinonRes from "./images/red/kaberne-sovinon-rezerve.png";
import kaberneSovinon from "./images/red/kaberne-sovinon.png";
import knyazTrubetskoy from "./images/red/knyaz-trubetskoy-kt.png";
import malbek from "./images/red/malbek.png";
import merlo from "./images/red/merlo.png";
import siraRose from "./images/rose/sira-roze.png";
import aligote from "./images/white/aligote.png";
import kaberneFranBile from "./images/white/kaberne-fran-bile.png";
import knyazTrubetskoyKtBile from "./images/white/knyaz-trubetskoy-kt-bile.png";
import perlinaStepu from "./images/white/perlina-stepu.png";
import shardone from "./images/white/shardone.png";


const redWine=[
    {
        name: "Kaberne-Fran",
        year: 2019,
        color: "Red",
        price: "5 €",
        src: kaberneFran,
        id: uuid4(),
        orQu: 0,
    },
    {
        name: "Kaberne-Sovinon-Reserve",
        year: 2021,
        color: "Red",
        price: "9 €",
        src: kaberneSovinonRes,
        id: uuid4(),
        orQu: 0,
    },
    {
        name: "Kaberne-Sovinon",
        year: 2021,
        color: "Red",
        price: "7 €",
        src: kaberneSovinon,
        id: uuid4(),
        orQu: 0,
    },
    {
        name: "Knyaz-Trubetskoy-Kt",
        year: 2020,
        color: "Red",
        price: "4 €",
        src: knyazTrubetskoy,
        id: uuid4(),
        orQu: 0,
    },
    {
        name: "Malbek",
        year: 2018,
        color: "Red",
        price: "10 €",
        src: malbek,
        id: uuid4(),
        orQu: 0,
    },
    {
        name: "Merlo",
        year: 2021,
        color: "Red",
        price: "7 €",
        src: merlo,
        id: uuid4(),
        orQu: 0,
    }
]

const roseWine = [
    {
        name: "Rose",
        year: 2019,
        color: "Rose",
        price: "6 €",
        src: siraRose,
        id: uuid4(),
        orQu: 0,
    }
]

const whiteWine =[
    {
        name: "Aligote",
        year: 2019,
        color: "White",
        price: "6 €",
        src: aligote,
        id: uuid4(),
        orQu: 0,
    },
    {
        name: "Kaberne Fran",
        year: 2020,
        color: "White",
        price: "5 €",
        src: kaberneFranBile,
        id: uuid4(),
        orQu: 0,
    },
    {
        name: "Knyaz Trubetskoy KT",
        year: 2018,
        color: "White",
        price: "4 €",
        src: knyazTrubetskoyKtBile,
        id: uuid4(),
        orQu: 0,
    },
    {
        name: "Perlina Stepu",
        year: 2021,
        color: "White",
        price: "9 €",
        src: perlinaStepu,
        id: uuid4(),
        orQu: 0,
    },
    {
        name: "Shardone",
        year: 2021,
        color: "White",
        price: "6 €",
        src: shardone,
        id: uuid4(),
        orQu: 0,
    }
]

export {redWine, roseWine, whiteWine}