import { Injectable } from '@angular/core';

import { ClienteDadosGerais } from '../../_interfaces/clientes/cliente-dados-gerais.interface';
import { ClienteDadosContactos } from '../../_interfaces/clientes/cliente-dados-contactos.interface';
import { removeSummaryDuplicates } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class GetClientesService {
  constructor() { }

  clientesDadosGerais: ClienteDadosGerais[] = [
    {
      idCliente: 1,
      nome: 'Romola Warrier',
      morada: '83552 Northport Place',
      dataNascimento: '2003/02/15',
      genero: 1,
    },
    {
      idCliente: 2,
      nome: 'York Rooms',
      morada: '5 Calypso Plaza',
      dataNascimento: '1990/03/27',
      genero: 0,
    },
    {
      idCliente: 3,
      nome: 'Artur Aisman',
      morada: '61 Dixon Center',
      dataNascimento: '1957/11/30',
      genero: 1,
    },
    {
      idCliente: 4,
      nome: 'Curran Todhunter',
      morada: '8 Anzinger Point',
      dataNascimento: '1984/08/28',
      genero: 0,
    },
    {
      idCliente: 5,
      nome: 'Maiga Rodolphe',
      morada: '5 Jay Point',
      dataNascimento: '1988/05/21',
      genero: 1,
    },
    {
      idCliente: 6,
      nome: 'Valaree Churms',
      morada: '36250 Service Pass',
      dataNascimento: '1982/02/16',
      genero: 0,
    },
    {
      idCliente: 7,
      nome: 'Jeromy Cleobury',
      morada: '86000 Saint Paul Alley',
      dataNascimento: '1968/09/02',
      genero: 1,
    },
    {
      idCliente: 8,
      nome: 'Zachery Trittam',
      morada: '97913 Dottie Way',
      dataNascimento: '1994/01/31',
      genero: 0,
    },
    {
      idCliente: 9,
      nome: 'Stacy Ortsmann',
      morada: '05489 Onsgard Avenue',
      dataNascimento: '1971/04/15',
      genero: 1,
    },
    {
      idCliente: 10,
      nome: 'Rachael Murricanes',
      morada: '464 Monica Way',
      dataNascimento: '1996/12/27',
      genero: 0,
    },
    {
      idCliente: 11,
      nome: 'Joete Manger',
      morada: '504 Pepper Wood Parkway',
      dataNascimento: '2000/12/31',
      genero: 1,
    },
    {
      idCliente: 12,
      nome: 'Di McGivena',
      morada: '56172 Grim Pass',
      dataNascimento: '1966/02/05',
      genero: 0,
    },
    {
      idCliente: 13,
      nome: 'Kristoforo Salthouse',
      morada: '16 2nd Terrace',
      dataNascimento: '1994/07/04',
      genero: 1,
    },
    {
      idCliente: 14,
      nome: 'Dosi Rigeby',
      morada: '77025 Clyde Gallagher Park',
      dataNascimento: '1986/10/18',
      genero: 0,
    },
    {
      idCliente: 15,
      nome: 'Quint Govenlock',
      morada: '5737 Rockefeller Point',
      dataNascimento: '1990/07/21',
      genero: 1,
    },
    {
      idCliente: 16,
      nome: 'Elston Skyme',
      morada: '93 Heffernan Crossing',
      dataNascimento: '1971/09/05',
      genero: 0,
    },
    {
      idCliente: 17,
      nome: 'Maxwell Ramstead',
      morada: '3 Bellgrove Park',
      dataNascimento: '1989/05/14',
      genero: 1,
    },
    {
      idCliente: 18,
      nome: 'Finn Bridgement',
      morada: '5752 Karstens Trail',
      dataNascimento: '1983/09/04',
      genero: 0,
    },
    {
      idCliente: 19,
      nome: 'Sib Spring',
      morada: '44330 Shelley Point',
      dataNascimento: '1979/03/14',
      genero: 1,
    },
    {
      idCliente: 20,
      nome: 'Ado Tavernor',
      morada: '2911 Graceland Alley',
      dataNascimento: '1989/06/05',
      genero: 0,
    },
    {
      idCliente: 21,
      nome: 'Vernon Sidwell',
      morada: '24 Sloan Center',
      dataNascimento: '1958/12/26',
      genero: 1,
    },
    {
      idCliente: 22,
      nome: 'Suzanna McIlhatton',
      morada: '0 Colorado Trail',
      dataNascimento: '1957/08/13',
      genero: 0,
    },
    {
      idCliente: 23,
      nome: 'Nanni Filyukov',
      morada: '2 Dakota Drive',
      dataNascimento: '1970/01/30',
      genero: 1,
    },
    {
      idCliente: 24,
      nome: "Aleece O' Hogan",
      morada: '9 Lawn Place',
      dataNascimento: '1986/03/05',
      genero: 0,
    },
    {
      idCliente: 25,
      nome: 'Catharina Attrill',
      morada: '437 Truax Way',
      dataNascimento: '1977/10/29',
      genero: 1,
    },
    {
      idCliente: 26,
      nome: 'Antonius Goodere',
      morada: '78097 Stone Corner Place',
      dataNascimento: '1994/02/23',
      genero: 0,
    },
    {
      idCliente: 27,
      nome: 'Daffi Davie',
      morada: '05 Scofield Road',
      dataNascimento: '1985/12/02',
      genero: 1,
    },
    {
      idCliente: 28,
      nome: 'Jaynell Willatt',
      morada: '81728 Fisk Place',
      dataNascimento: '1985/05/12',
      genero: 0,
    },
    {
      idCliente: 29,
      nome: 'Edithe Hinksen',
      morada: '195 Onsgard Way',
      dataNascimento: '1977/10/12',
      genero: 1,
    },
    {
      idCliente: 30,
      nome: 'Kasper Antuk',
      morada: '50554 Russell Terrace',
      dataNascimento: '1983/05/17',
      genero: 0,
    },
    {
      idCliente: 31,
      nome: 'Sherrie Jirieck',
      morada: '0406 Packers Circle',
      dataNascimento: '1955/12/21',
      genero: 1,
    },
    {
      idCliente: 32,
      nome: 'Mirella Kybird',
      morada: '334 Sutherland Street',
      dataNascimento: '1981/12/14',
      genero: 0,
    },
    {
      idCliente: 33,
      nome: 'Leontyne Lyndon',
      morada: '5 High Crossing Terrace',
      dataNascimento: '1959/01/12',
      genero: 1,
    },
    {
      idCliente: 34,
      nome: 'Brok Leyban',
      morada: '067 Kropf Pass',
      dataNascimento: '1998/08/23',
      genero: 0,
    },
    {
      idCliente: 35,
      nome: 'Leontine Lerohan',
      morada: '8 Golden Leaf Court',
      dataNascimento: '1955/03/06',
      genero: 1,
    },
    {
      idCliente: 36,
      nome: 'Vonni Paddon',
      morada: '7 Cambridge Point',
      dataNascimento: '1980/08/04',
      genero: 0,
    },
    {
      idCliente: 37,
      nome: 'Lianna Wood',
      morada: '919 Lindbergh Way',
      dataNascimento: '1960/01/06',
      genero: 1,
    },
    {
      idCliente: 38,
      nome: 'Evonne Odam',
      morada: '2 Onsgard Court',
      dataNascimento: '1987/02/02',
      genero: 0,
    },
    {
      idCliente: 39,
      nome: 'Jeddy Cubitt',
      morada: '51100 Glendale Park',
      dataNascimento: '1966/01/17',
      genero: 1,
    },
    {
      idCliente: 40,
      nome: 'Nixie Feldbrin',
      morada: '5548 Menomonie Point',
      dataNascimento: '1956/08/05',
      genero: 0,
    },
    {
      idCliente: 41,
      nome: 'Julie Cato',
      morada: '231 Green Terrace',
      dataNascimento: '1973/12/14',
      genero: 1,
    },
    {
      idCliente: 42,
      nome: 'Phineas Stonebridge',
      morada: '7 Killdeer Way',
      dataNascimento: '2000/06/20',
      genero: 0,
    },
    {
      idCliente: 43,
      nome: 'Melodie Rickcord',
      morada: '56593 Toban Road',
      dataNascimento: '1973/01/19',
      genero: 1,
    },
    {
      idCliente: 44,
      nome: 'Harvey McCrisken',
      morada: '40343 Morrow Avenue',
      dataNascimento: '1977/01/15',
      genero: 0,
    },
    {
      idCliente: 45,
      nome: 'Dodie Kegg',
      morada: '16 Redwing Lane',
      dataNascimento: '1980/03/29',
      genero: 1,
    },
    {
      idCliente: 46,
      nome: 'Cymbre Keems',
      morada: '3 2nd Court',
      dataNascimento: '1992/01/23',
      genero: 0,
    },
    {
      idCliente: 47,
      nome: 'Mikaela Alfonzo',
      morada: '279 Trailsway Avenue',
      dataNascimento: '1966/11/12',
      genero: 1,
    },
    {
      idCliente: 48,
      nome: 'Franzen Ronald',
      morada: '6460 Sunnyside Point',
      dataNascimento: '1981/07/11',
      genero: 0,
    },
    {
      idCliente: 49,
      nome: 'Agna Maclean',
      morada: '74 Karstens Circle',
      dataNascimento: '1969/06/25',
      genero: 1,
    },
    {
      idCliente: 50,
      nome: 'Moshe Shearmur',
      morada: '3 Shasta Terrace',
      dataNascimento: '1952/09/03',
      genero: 0,
    },
    {
      idCliente: 51,
      nome: 'Barr Varley',
      morada: '81 Oak Terrace',
      dataNascimento: '1959/12/10',
      genero: 1,
    },
    {
      idCliente: 52,
      nome: 'Auroora Simkins',
      morada: '05524 Becker Point',
      dataNascimento: '1954/08/21',
      genero: 0,
    },
    {
      idCliente: 53,
      nome: 'Lesly Kingswold',
      morada: '26 Bowman Trail',
      dataNascimento: '1988/02/05',
      genero: 1,
    },
    {
      idCliente: 54,
      nome: 'Mommy Deeny',
      morada: '126 Bowman Court',
      dataNascimento: '1989/02/20',
      genero: 0,
    },
    {
      idCliente: 55,
      nome: 'Josefina Minnock',
      morada: '840 Merchant Alley',
      dataNascimento: '1965/05/02',
      genero: 1,
    },
    {
      idCliente: 56,
      nome: 'Hersh Rapaport',
      morada: '34871 Butterfield Alley',
      dataNascimento: '1956/10/16',
      genero: 0,
    },
    {
      idCliente: 57,
      nome: 'Morry Ashall',
      morada: '5 Waubesa Alley',
      dataNascimento: '1982/09/07',
      genero: 1,
    },
    {
      idCliente: 58,
      nome: 'Essy Kleuer',
      morada: '55 Spohn Place',
      dataNascimento: '1977/08/26',
      genero: 0,
    },
    {
      idCliente: 59,
      nome: 'Stephanus Beckhouse',
      morada: '11 Carey Trail',
      dataNascimento: '2000/03/18',
      genero: 1,
    },
    {
      idCliente: 60,
      nome: 'Catrina Blueman',
      morada: '652 Lake View Parkway',
      dataNascimento: '1994/08/16',
      genero: 0,
    },
    {
      idCliente: 61,
      nome: 'Jany Lomaz',
      morada: '07 Anniversary Place',
      dataNascimento: '1971/05/18',
      genero: 1,
    },
    {
      idCliente: 62,
      nome: 'Claus Tuther',
      morada: '01 Calypso Parkway',
      dataNascimento: '1967/07/08',
      genero: 0,
    },
    {
      idCliente: 63,
      nome: 'Herve Dudley',
      morada: '85230 Walton Hill',
      dataNascimento: '1986/10/02',
      genero: 1,
    },
    {
      idCliente: 64,
      nome: 'Lillis Cromar',
      morada: '999 Spohn Junction',
      dataNascimento: '1974/07/13',
      genero: 0,
    },
    {
      idCliente: 65,
      nome: "Piotr Van't Hoff",
      morada: '12000 Morningstar Street',
      dataNascimento: '1990/06/21',
      genero: 1,
    },
    {
      idCliente: 66,
      nome: 'Reeva Cattemull',
      morada: '21588 Division Crossing',
      dataNascimento: '1998/08/25',
      genero: 0,
    },
    {
      idCliente: 67,
      nome: 'Rea Friel',
      morada: '0 Clemons Court',
      dataNascimento: '1957/07/10',
      genero: 1,
    },
    {
      idCliente: 68,
      nome: 'Bessy Atley',
      morada: '535 Tennessee Hill',
      dataNascimento: '1967/12/05',
      genero: 0,
    },
    {
      idCliente: 69,
      nome: 'Jase Di Biagi',
      morada: '110 Fairview Street',
      dataNascimento: '1971/09/12',
      genero: 1,
    },
    {
      idCliente: 70,
      nome: 'Risa Flowith',
      morada: '16483 Gateway Terrace',
      dataNascimento: '1956/11/15',
      genero: 0,
    },
    {
      idCliente: 71,
      nome: 'Robert Androli',
      morada: '933 Anniversary Alley',
      dataNascimento: '1984/06/21',
      genero: 1,
    },
    {
      idCliente: 72,
      nome: 'Camala Letterick',
      morada: '8520 Buell Court',
      dataNascimento: '1999/01/03',
      genero: 0,
    },
    {
      idCliente: 73,
      nome: 'Upton Larchiere',
      morada: '1 Becker Place',
      dataNascimento: '1958/04/20',
      genero: 1,
    },
    {
      idCliente: 74,
      nome: 'Saw Gaskell',
      morada: '846 Knutson Lane',
      dataNascimento: '1959/07/25',
      genero: 0,
    },
    {
      idCliente: 75,
      nome: 'Lynn Houdmont',
      morada: '3758 Dwight Alley',
      dataNascimento: '1963/09/09',
      genero: 1,
    },
    {
      idCliente: 76,
      nome: 'Morgana August',
      morada: '827 Darwin Plaza',
      dataNascimento: '2000/01/21',
      genero: 0,
    },
    {
      idCliente: 77,
      nome: 'Milo Wenderott',
      morada: '2 Brentwood Lane',
      dataNascimento: '2002/09/11',
      genero: 1,
    },
    {
      idCliente: 78,
      nome: 'Shane Seamen',
      morada: '6 Weeping Birch Point',
      dataNascimento: '1966/10/06',
      genero: 0,
    },
    {
      idCliente: 79,
      nome: 'Teriann Francisco',
      morada: '25151 Homewood Street',
      dataNascimento: '1990/05/13',
      genero: 1,
    },
    {
      idCliente: 80,
      nome: 'Kiele Cudde',
      morada: '130 American Park',
      dataNascimento: '1976/10/05',
      genero: 0,
    },
    {
      idCliente: 81,
      nome: 'Osborne Atlee',
      morada: '73 Loftsgordon Lane',
      dataNascimento: '2002/11/12',
      genero: 1,
    },
    {
      idCliente: 82,
      nome: 'Nani Billborough',
      morada: '419 Blue Bill Park Trail',
      dataNascimento: '1962/08/21',
      genero: 0,
    },
    {
      idCliente: 83,
      nome: 'Haily Beggan',
      morada: '77 Muir Crossing',
      dataNascimento: '1997/01/30',
      genero: 1,
    },
    {
      idCliente: 84,
      nome: 'Emmalynne Headrick',
      morada: '1235 2nd Park',
      dataNascimento: '1977/12/05',
      genero: 0,
    },
    {
      idCliente: 85,
      nome: 'Angelita Eate',
      morada: '3361 Northport Pass',
      dataNascimento: '1981/06/28',
      genero: 1,
    },
    {
      idCliente: 86,
      nome: 'Val Babcock',
      morada: '041 Clyde Gallagher Crossing',
      dataNascimento: '1975/03/28',
      genero: 0,
    },
    {
      idCliente: 87,
      nome: 'Pris Blackah',
      morada: '5 Welch Junction',
      dataNascimento: '1986/11/06',
      genero: 1,
    },
    {
      idCliente: 88,
      nome: 'Chloe Budgett',
      morada: '2104 Algoma Crossing',
      dataNascimento: '1994/07/20',
      genero: 0,
    },
    {
      idCliente: 89,
      nome: 'Eugenia Horlock',
      morada: '9 Dayton Avenue',
      dataNascimento: '1993/09/23',
      genero: 1,
    },
    {
      idCliente: 90,
      nome: 'Aveline Rubke',
      morada: '7536 Corscot Drive',
      dataNascimento: '1999/12/25',
      genero: 0,
    },
    {
      idCliente: 91,
      nome: 'Allina Chiese',
      morada: '8 Clemons Drive',
      dataNascimento: '1988/01/26',
      genero: 1,
    },
    {
      idCliente: 92,
      nome: 'Somerset Zannotti',
      morada: '0296 Ronald Regan Pass',
      dataNascimento: '1963/09/18',
      genero: 0,
    },
    {
      idCliente: 93,
      nome: 'Brennan Courtois',
      morada: '768 Packers Court',
      dataNascimento: '1989/07/08',
      genero: 1,
    },
    {
      idCliente: 94,
      nome: 'Elise Kabsch',
      morada: '2 Bultman Road',
      dataNascimento: '1955/10/12',
      genero: 0,
    },
    {
      idCliente: 95,
      nome: 'Amalia Phillimore',
      morada: '43763 Muir Hill',
      dataNascimento: '1973/01/27',
      genero: 1,
    },
    {
      idCliente: 96,
      nome: 'Kailey Pashenkov',
      morada: '82 Sycamore Crossing',
      dataNascimento: '2001/12/10',
      genero: 0,
    },
    {
      idCliente: 97,
      nome: 'Starlin Van Halle',
      morada: '74 Hooker Drive',
      dataNascimento: '1990/10/06',
      genero: 1,
    },
    {
      idCliente: 98,
      nome: 'Baxter Spenton',
      morada: '33571 Summerview Circle',
      dataNascimento: '1967/07/26',
      genero: 0,
    },
    {
      idCliente: 99,
      nome: 'Isacco Provost',
      morada: '5145 Vernon Circle',
      dataNascimento: '1960/02/09',
      genero: 1,
    },
    {
      idCliente: 100,
      nome: 'Karlan Hansard',
      morada: '476 Northridge Road',
      dataNascimento: '2001/12/28',
      genero: 0,
    },
  ];
  tamanhoClientes = this.clientesDadosGerais.length;
  clientesDadosContactos: ClienteDadosContactos[] = [
    {
      idCliente: 1,
      telemovel: 984559946,
      email: 'jalders0@reddit.com',
    },
    {
      idCliente: 2,
      telemovel: 952251605,
      email: 'mespino1@tamu.edu',
    },
    {
      idCliente: 3,
      telemovel: 953754161,
      email: 'acolbertson2@lycos.com',
    },
    {
      idCliente: 4,
      telemovel: 908723061,
      email: 'lgodfree3@walmart.com',
    },
    {
      idCliente: 5,
      telemovel: 908623930,
      email: 'eabbess4@nytimes.com',
    },
    {
      idCliente: 6,
      telemovel: 977569807,
      email: 'mcrebott5@ox.ac.uk',
    },
    {
      idCliente: 7,
      telemovel: 949722030,
      email: 'jdelucia6@joomla.org',
    },
    {
      idCliente: 8,
      telemovel: 903852670,
      email: 'megalton7@issuu.com',
    },
    {
      idCliente: 9,
      telemovel: 993590333,
      email: 'tdubock8@t.co',
    },
    {
      idCliente: 10,
      telemovel: 914857808,
      email: 'mtapenden9@craigslist.org',
    },
    {
      idCliente: 11,
      telemovel: 931605805,
      email: 'ggunthorpea@ox.ac.uk',
    },
    {
      idCliente: 12,
      telemovel: 927753074,
      email: 'bhamelynb@w3.org',
    },
    {
      idCliente: 13,
      telemovel: 927776514,
      email: 'kfrendc@hugedomains.com',
    },
    {
      idCliente: 14,
      telemovel: 971725201,
      email: 'ccammomiled@google.ca',
    },
    {
      idCliente: 15,
      telemovel: 984573631,
      email: 'ctaylote@comcast.net',
    },
    {
      idCliente: 16,
      telemovel: 901121988,
      email: 'gjewisef@cafepress.com',
    },
    {
      idCliente: 17,
      telemovel: 949139243,
      email: 'gcattermullg@last.fm',
    },
    {
      idCliente: 18,
      telemovel: 903268822,
      email: 'sbattailleh@nasa.gov',
    },
    {
      idCliente: 19,
      telemovel: 988959835,
      email: 'sheimanni@biblegateway.com',
    },
    {
      idCliente: 20,
      telemovel: 921175149,
      email: 'atithecotej@epa.gov',
    },
    {
      idCliente: 21,
      telemovel: 950282534,
      email: 'amainzk@epa.gov',
    },
    {
      idCliente: 22,
      telemovel: 907039515,
      email: 'imacgorleyl@ifeng.com',
    },
    {
      idCliente: 23,
      telemovel: 985323035,
      email: 'pcramem@springer.com',
    },
    {
      idCliente: 24,
      telemovel: 981102453,
      email: 'emartynovn@hhs.gov',
    },
    {
      idCliente: 25,
      telemovel: 999322724,
      email: 'ekornackio@usatoday.com',
    },
    {
      idCliente: 26,
      telemovel: 977018134,
      email: 'kberreyp@booking.com',
    },
    {
      idCliente: 27,
      telemovel: 998811718,
      email: 'tgillamq@pcworld.com',
    },
    {
      idCliente: 28,
      telemovel: 971009667,
      email: 'kkynsonr@clickbank.net',
    },
    {
      idCliente: 29,
      telemovel: 952474350,
      email: 'cspurritts@redcross.org',
    },
    {
      idCliente: 30,
      telemovel: 921923344,
      email: 'gkochlint@shop-pro.jp',
    },
    {
      idCliente: 31,
      telemovel: 911299358,
      email: 'ssuggittu@tripod.com',
    },
    {
      idCliente: 32,
      telemovel: 927600727,
      email: 'mstonebridgev@discovery.com',
    },
    {
      idCliente: 33,
      telemovel: 921193424,
      email: 'cpuseyw@wisc.edu',
    },
    {
      idCliente: 34,
      telemovel: 956525516,
      email: 'mwhifex@omniture.com',
    },
    {
      idCliente: 35,
      telemovel: 952298149,
      email: 'fbrimhamy@miitbeian.gov.cn',
    },
    {
      idCliente: 36,
      telemovel: 919302783,
      email: 'hgreaterexz@slideshare.net',
    },
    {
      idCliente: 37,
      telemovel: 908375631,
      email: 'kgazey10@independent.co.uk',
    },
    {
      idCliente: 38,
      telemovel: 900959412,
      email: 'vbaggelley11@ucoz.com',
    },
    {
      idCliente: 39,
      telemovel: 967153691,
      email: 'amakinson12@washington.edu',
    },
    {
      idCliente: 40,
      telemovel: 959720075,
      email: 'plennie13@tamu.edu',
    },
    {
      idCliente: 41,
      telemovel: 985919180,
      email: 'rlabone14@unicef.org',
    },
    {
      idCliente: 42,
      telemovel: 916288977,
      email: 'apaulou15@eepurl.com',
    },
    {
      idCliente: 43,
      telemovel: 916101975,
      email: 'sklamp16@spiegel.de',
    },
    {
      idCliente: 44,
      telemovel: 969592128,
      email: 'gfeaster17@narod.ru',
    },
    {
      idCliente: 45,
      telemovel: 934437988,
      email: 'hmoule18@mediafire.com',
    },
    {
      idCliente: 46,
      telemovel: 978323233,
      email: 'jconklin19@liveinternet.ru',
    },
    {
      idCliente: 47,
      telemovel: 922096853,
      email: 'adugald1a@newyorker.com',
    },
    {
      idCliente: 48,
      telemovel: 971372683,
      email: 'dmadrell1b@unblog.fr',
    },
    {
      idCliente: 49,
      telemovel: 975131843,
      email: 'bwagner1c@yellowpages.com',
    },
    {
      idCliente: 50,
      telemovel: 931035508,
      email: 'cbleckly1d@ox.ac.uk',
    },
    {
      idCliente: 51,
      telemovel: 903962027,
      email: 'agarms1e@wordpress.com',
    },
    {
      idCliente: 52,
      telemovel: 932972791,
      email: 'igrigorushkin1f@xinhuanet.com',
    },
    {
      idCliente: 53,
      telemovel: 980005490,
      email: 'aghelardi1g@ameblo.jp',
    },
    {
      idCliente: 54,
      telemovel: 930597798,
      email: 'tsaby1h@delicious.com',
    },
    {
      idCliente: 55,
      telemovel: 918724283,
      email: 'ashire1i@cam.ac.uk',
    },
    {
      idCliente: 56,
      telemovel: 989683048,
      email: 'bhintze1j@biblegateway.com',
    },
    {
      idCliente: 57,
      telemovel: 991991400,
      email: 'cbrotherhed1k@google.pl',
    },
    {
      idCliente: 58,
      telemovel: 994632985,
      email: 'cjanata1l@xing.com',
    },
    {
      idCliente: 59,
      telemovel: 916108674,
      email: 'sbrister1m@livejournal.com',
    },
    {
      idCliente: 60,
      telemovel: 988235824,
      email: 'rmoreton1n@dailymail.co.uk',
    },
    {
      idCliente: 61,
      telemovel: 999713769,
      email: 'mclemits1o@purevolume.com',
    },
    {
      idCliente: 62,
      telemovel: 961435585,
      email: 'eportwain1p@msn.com',
    },
    {
      idCliente: 63,
      telemovel: 986617928,
      email: 'feldered1q@discovery.com',
    },
    {
      idCliente: 64,
      telemovel: 908647555,
      email: 'asabin1r@princeton.edu',
    },
    {
      idCliente: 65,
      telemovel: 917452110,
      email: 'arisley1s@rediff.com',
    },
    {
      idCliente: 66,
      telemovel: 979432679,
      email: 'gdelicate1t@uol.com.br',
    },
    {
      idCliente: 67,
      telemovel: 949242502,
      email: 'geite1u@surveymonkey.com',
    },
    {
      idCliente: 68,
      telemovel: 930562106,
      email: 'dkinnear1v@cisco.com',
    },
    {
      idCliente: 69,
      telemovel: 976401464,
      email: 'mpaxeford1w@washington.edu',
    },
    {
      idCliente: 70,
      telemovel: 979892640,
      email: 'ecadney1x@usnews.com',
    },
    {
      idCliente: 71,
      telemovel: 993586336,
      email: 'vwyson1y@google.de',
    },
    {
      idCliente: 72,
      telemovel: 928904174,
      email: 'cdanby1z@pen.io',
    },
    {
      idCliente: 73,
      telemovel: 909578404,
      email: 'cdiess20@surveymonkey.com',
    },
    {
      idCliente: 74,
      telemovel: 968680558,
      email: 'ddennerley21@liveinternet.ru',
    },
    {
      idCliente: 75,
      telemovel: 913764855,
      email: 'ydeex22@deviantart.com',
    },
    {
      idCliente: 76,
      telemovel: 969787145,
      email: 'ldinesen23@ustream.tv',
    },
    {
      idCliente: 77,
      telemovel: 972349532,
      email: 'bmitten24@foxnews.com',
    },
    {
      idCliente: 78,
      telemovel: 982584833,
      email: 'mpretor25@cbc.ca',
    },
    {
      idCliente: 79,
      telemovel: 975776825,
      email: 'kbonaire26@dion.ne.jp',
    },
    {
      idCliente: 80,
      telemovel: 980882866,
      email: 'mhunday27@earthlink.net',
    },
    {
      idCliente: 81,
      telemovel: 956403520,
      email: 'asweedy28@chicagotribune.com',
    },
    {
      idCliente: 82,
      telemovel: 997253320,
      email: 'tkleinschmidt29@fotki.com',
    },
    {
      idCliente: 83,
      telemovel: 915815772,
      email: 'btaaffe2a@artisteer.com',
    },
    {
      idCliente: 84,
      telemovel: 984216929,
      email: 'eimloch2b@omniture.com',
    },
    {
      idCliente: 85,
      telemovel: 987871866,
      email: 'fmcconnell2c@lulu.com',
    },
    {
      idCliente: 86,
      telemovel: 955147391,
      email: 'gtreadwell2d@yahoo.com',
    },
    {
      idCliente: 87,
      telemovel: 920245740,
      email: 'mcordelle2e@eventbrite.com',
    },
    {
      idCliente: 88,
      telemovel: 906529889,
      email: 'sblazek2f@unesco.org',
    },
    {
      idCliente: 89,
      telemovel: 947761520,
      email: 'akadwallider2g@wikispaces.com',
    },
    {
      idCliente: 90,
      telemovel: 901018149,
      email: 'dtirrell2h@taobao.com',
    },
    {
      idCliente: 91,
      telemovel: 987498165,
      email: 'cknipe2i@google.pl',
    },
    {
      idCliente: 92,
      telemovel: 943744849,
      email: 'bpfertner2j@ox.ac.uk',
    },
    {
      idCliente: 93,
      telemovel: 958041505,
      email: 'odaspar2k@statcounter.com',
    },
    {
      idCliente: 94,
      telemovel: 920016804,
      email: 'gdikels2l@un.org',
    },
    {
      idCliente: 95,
      telemovel: 935663357,
      email: 'xsimnel2m@state.tx.us',
    },
    {
      idCliente: 96,
      telemovel: 996067668,
      email: 'kduckett2n@earthlink.net',
    },
    {
      idCliente: 97,
      telemovel: 987473960,
      email: 'dbreckell2o@ted.com',
    },
    {
      idCliente: 98,
      telemovel: 910111565,
      email: 'smcvitie2p@businesswire.com',
    },
    {
      idCliente: 99,
      telemovel: 953886103,
      email: 'jbetke2q@geocities.jp',
    },
    {
      idCliente: 100,
      telemovel: 905482191,
      email: 'jstaker2r@mit.edu',
    },
  ];

  private resultsLength: number;

  getClientes(filtro: string, numPagina: number, numResultados: number) {
    // TODO: Exercício 1
    const results: ClienteDadosGerais[] = [];
    for (const cliente of this.clientesDadosGerais) {
      if (cliente.nome.toLowerCase().indexOf(filtro.toLowerCase()) !== -1) {
        results.push(cliente);
      }
      this.resultsLength = results.length;
    }
    let startIndex = numPagina * numResultados;
    let endIndex = startIndex + numResultados;
    if (endIndex >= results.length) {
      endIndex = results.length;
    }
    const pageSlice = results.slice(startIndex, endIndex);

    return pageSlice;
  }

  updateClienteDadosGerais(dadosGeraisParaGravar: ClienteDadosGerais, idCliente: number) {
    let index = this.clientesDadosGerais.findIndex(
      (x) => x.idCliente === idCliente);
    this.clientesDadosGerais[index] = dadosGeraisParaGravar;
  }

  updateClienteDadosContactos(dadosContactosParaGravar: ClienteDadosContactos, idCliente: number) {
    let index = this.clientesDadosContactos.findIndex(
      (x) => x.idCliente === idCliente);
    this.clientesDadosContactos[index] = dadosContactosParaGravar;
  }

  addNewClienteDadosGerais(dadosGeraisParaGravar: ClienteDadosGerais) {
    this.clientesDadosGerais.push(dadosGeraisParaGravar);
  }

  addNewClienteDadosContactos(dadosContactosParaGravar: ClienteDadosContactos) {
    this.clientesDadosContactos.push(dadosContactosParaGravar);
  }

  deleteClienteDadosGerais(idCliente: number) {
    let index = this.clientesDadosGerais.findIndex(
      (x) => x.idCliente === idCliente);
    this.clientesDadosGerais.splice(index, 1);

  }
  deleteClienteDadosContactos(idCliente: number) {
    let index = this.clientesDadosContactos.findIndex(
      (x) => x.idCliente === idCliente);
    this.clientesDadosContactos.splice(index, 1);
  }

  getResultsLength(): number {
    return this.resultsLength;
  }

  getClientesTotal(): number {
    return this.tamanhoClientes;
  }

  getIdDoUltimoCliente(): number {
    let ultimoCliente = this.clientesDadosGerais[this.tamanhoClientes - 1];
    return ultimoCliente.idCliente;
  }
}
