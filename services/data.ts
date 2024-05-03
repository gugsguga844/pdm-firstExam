//Dados para a Atividade Avaliativa 1.
//Coloque este arquivo na pasta "services" e depois importe na página onde ele será usado.

const data = [
  { id: 1, brand: "Dodge", model: "Ram Wagon B250", year: 1993 },
  { id: 2, brand: "Volvo", model: "XC90", year: 2003 },
  { id: 3, brand: "Land Rover", model: "LR2", year: 2009 },
  { id: 4, brand: "Mitsubishi", model: "Mirage", year: 1985 },
  { id: 5, brand: "Nissan", model: "Sentra", year: 1997 },
  { id: 6, brand: "Ford", model: "F-Series", year: 1989 },
  { id: 7, brand: "Dodge", model: "Ram Van 3500", year: 2001 },
  { id: 8, brand: "Nissan", model: "Sentra", year: 2001 },
  { id: 9, brand: "Dodge", model: "Ram Van 3500", year: 2001 },
  { id: 10, brand: "Mitsubishi", model: "Mighty Max", year: 1996 },
  { id: 11, brand: "Volvo", model: "C70", year: 2002 },
  { id: 12, brand: "Toyota", model: "Tacoma Xtra", year: 1997 },
  { id: 13, brand: "Ford", model: "Five Hundred", year: 2006 },
  { id: 14, brand: "Ford", model: "F350", year: 2009 },
  { id: 15, brand: "BMW", model: "M6", year: 2010 },
  { id: 16, brand: "Ford", model: "Taurus X", year: 2009 },
  { id: 17, brand: "Honda", model: "Odyssey", year: 2012 },
  { id: 18, brand: "Acura", model: "Vigor", year: 1992 },
  { id: 19, brand: "GMC", model: "Savana", year: 2007 },
  { id: 20, brand: "Mazda", model: "Mazda6", year: 2005 },
  { id: 21, brand: "Pontiac", model: "Aztek", year: 2005 },
  { id: 22, brand: "GMC", model: "Yukon XL 1500", year: 2012 },
  { id: 23, brand: "Dodge", model: "Grand Caravan", year: 1994 },
  { id: 24, brand: "Dodge", model: "Ram 1500", year: 2001 },
  { id: 25, brand: "Pontiac", model: "Firebird", year: 1999 },
  { id: 26, brand: "Infiniti", model: "G", year: 1993 },
  { id: 27, brand: "Ford", model: "F-Series", year: 2004 },
  { id: 28, brand: "Cadillac", model: "Eldorado", year: 1994 },
  { id: 29, brand: "Mitsubishi", model: "Eclipse", year: 1989 },
  { id: 30, brand: "Mitsubishi", model: "Lancer", year: 2001 },
  { id: 31, brand: "Mercedes-Benz", model: "E-Class", year: 2012 },
  { id: 32, brand: "Plymouth", model: "Voyager", year: 1997 },
  { id: 33, brand: "Ford", model: "Probe", year: 1993 },
  { id: 34, brand: "Ford", model: "ZX2", year: 2001 },
  { id: 35, brand: "Ford", model: "Ranger", year: 2007 },
  { id: 36, brand: "Dodge", model: "Intrepid", year: 1997 },
  { id: 37, brand: "Nissan", model: "Titan", year: 2007 },
  { id: 38, brand: "Toyota", model: "Sequoia", year: 2002 },
  { id: 39, brand: "Chevrolet", model: "Tracker", year: 2000 },
  { id: 40, brand: "Audi", model: "A4", year: 1997 },
  { id: 41, brand: "Volvo", model: "V70", year: 2006 },
  { id: 42, brand: "Oldsmobile", model: "Aurora", year: 1996 },
  { id: 43, brand: "Chrysler", model: "Town & Country", year: 1992 },
  { id: 44, brand: "Toyota", model: "Previa", year: 1991 },
  { id: 45, brand: "Pontiac", model: "Sunfire", year: 1996 },
  { id: 46, brand: "Chrysler", model: "Sebring", year: 1998 },
  { id: 47, brand: "Chevrolet", model: "Tracker", year: 2001 },
  { id: 48, brand: "Dodge", model: "Dakota", year: 2001 },
  { id: 49, brand: "Mazda", model: "Mazda6", year: 2010 },
  { id: 50, brand: "Mazda", model: "MX-5", year: 2012 },
  { id: 51, brand: "Ford", model: "F250", year: 1999 },
  { id: 52, brand: "MINI", model: "Cooper Clubman", year: 2011 },
  { id: 53, brand: "Ferrari", model: "612 Scaglietti", year: 2008 },
  { id: 54, brand: "Buick", model: "Riviera", year: 1979 },
  { id: 55, brand: "Saturn", model: "L-Series", year: 2003 },
  { id: 56, brand: "Audi", model: "A3", year: 2007 },
  { id: 57, brand: "Jeep", model: "Commander", year: 2006 },
  { id: 58, brand: "Volkswagen", model: "Eurovan", year: 1997 },
  { id: 59, brand: "Hummer", model: "H3", year: 2008 },
  { id: 60, brand: "Chrysler", model: "300", year: 2006 },
  { id: 61, brand: "Porsche", model: "911", year: 1994 },
  { id: 62, brand: "Scion", model: "tC", year: 2008 },
  { id: 63, brand: "BMW", model: "X3", year: 2007 },
  { id: 64, brand: "Acura", model: "Vigor", year: 1992 },
  { id: 65, brand: "Infiniti", model: "FX", year: 2009 },
  { id: 66, brand: "BMW", model: "5 Series", year: 2010 },
  { id: 67, brand: "Toyota", model: "T100 Xtra", year: 1995 },
  { id: 68, brand: "Audi", model: "S8", year: 2006 },
  { id: 69, brand: "Chrysler", model: "300", year: 2007 },
  { id: 70, brand: "BMW", model: "8 Series", year: 1995 },
  { id: 71, brand: "Toyota", model: "Camry", year: 2010 },
  { id: 72, brand: "Pontiac", model: "Sunfire", year: 1995 },
  { id: 73, brand: "GMC", model: "Suburban 2500", year: 1997 },
  { id: 74, brand: "Chrysler", model: "Voyager", year: 2003 },
  { id: 75, brand: "Buick", model: "Lucerne", year: 2009 },
  { id: 76, brand: "BMW", model: "M6", year: 2006 },
  { id: 77, brand: "Ford", model: "F150", year: 1995 },
  { id: 78, brand: "Mercedes-Benz", model: "M-Class", year: 2007 },
  { id: 79, brand: "Pontiac", model: "Grand Prix", year: 2005 },
  { id: 80, brand: "Suzuki", model: "Grand Vitara", year: 1999 },
  { id: 81, brand: "Mercedes-Benz", model: "SL-Class", year: 1990 },
  { id: 82, brand: "Dodge", model: "Durango", year: 1999 },
  { id: 83, brand: "Ford", model: "E350", year: 2005 },
  { id: 84, brand: "BMW", model: "545", year: 2004 },
  { id: 85, brand: "Hyundai", model: "Tucson", year: 2011 },
  { id: 86, brand: "Acura", model: "Integra", year: 1995 },
  { id: 87, brand: "Jaguar", model: "XJ Series", year: 2001 },
  { id: 88, brand: "Chrysler", model: "300M", year: 2002 },
  { id: 89, brand: "Toyota", model: "RAV4", year: 2010 },
  { id: 90, brand: "Jeep", model: "Grand Cherokee", year: 2000 },
  { id: 91, brand: "Mazda", model: "B-Series", year: 2004 },
  { id: 92, brand: "Ford", model: "Focus", year: 2012 },
  { id: 93, brand: "BMW", model: "760", year: 2004 },
  { id: 94, brand: "Kia", model: "Soul", year: 2010 },
  { id: 95, brand: "Mercury", model: "Tracer", year: 1991 },
  { id: 96, brand: "Buick", model: "Roadmaster", year: 1991 },
  { id: 97, brand: "Mitsubishi", model: "Montero Sport", year: 2002 },
  { id: 98, brand: "GMC", model: "Rally Wagon 2500", year: 1994 },
  { id: 99, brand: "Toyota", model: "Land Cruiser", year: 1998 },
  { id: 100, brand: "Lincoln", model: "Town Car", year: 1989 },
  { id: 101, brand: "Toyota", model: "Corolla", year: 1998 },
  { id: 102, brand: "MINI", model: "Cooper Clubman", year: 2010 },
  { id: 103, brand: "Suzuki", model: "XL-7", year: 2004 },
  { id: 104, brand: "Honda", model: "Civic", year: 1990 },
  { id: 105, brand: "Pontiac", model: "Firebird", year: 1987 },
  { id: 106, brand: "Mercury", model: "Mystique", year: 2000 },
  { id: 107, brand: "Ferrari", model: "FF", year: 2012 },
  { id: 108, brand: "Ford", model: "LTD Crown Victoria", year: 1991 },
  { id: 109, brand: "Porsche", model: "911", year: 2005 },
  { id: 110, brand: "BMW", model: "5 Series", year: 2004 },
  { id: 111, brand: "Mercury", model: "Marquis", year: 1985 },
  { id: 112, brand: "Honda", model: "Accord", year: 1998 },
  { id: 113, brand: "Buick", model: "LeSabre", year: 2003 },
  { id: 114, brand: "Ford", model: "Explorer Sport", year: 2001 },
  { id: 115, brand: "Honda", model: "Fit", year: 2012 },
  { id: 116, brand: "Nissan", model: "Pathfinder", year: 2011 },
  { id: 117, brand: "Suzuki", model: "Aerio", year: 2002 },
  { id: 118, brand: "GMC", model: "2500 Club Coupe", year: 1996 },
  { id: 119, brand: "Audi", model: "S4", year: 2010 },
  { id: 120, brand: "Chevrolet", model: "Venture", year: 2000 },
  { id: 121, brand: "Mazda", model: "626", year: 1985 },
  { id: 122, brand: "Volkswagen", model: "Jetta", year: 2008 },
  { id: 123, brand: "Kia", model: "Sorento", year: 2012 },
  { id: 124, brand: "Lincoln", model: "MKS", year: 2012 },
  { id: 125, brand: "Ford", model: "Crown Victoria", year: 2007 },
  { id: 126, brand: "Mercedes-Benz", model: "GLK-Class", year: 2011 },
  { id: 127, brand: "Oldsmobile", model: "Ciera", year: 1995 },
  { id: 128, brand: "BMW", model: "325", year: 2005 },
  { id: 129, brand: "Audi", model: "TT", year: 2008 },
  { id: 130, brand: "Chrysler", model: "Town & Country", year: 2006 },
  { id: 131, brand: "Toyota", model: "Prius c", year: 2012 },
  { id: 132, brand: "Ford", model: "F350", year: 2005 },
  { id: 133, brand: "Mitsubishi", model: "Galant", year: 1998 },
  { id: 134, brand: "Oldsmobile", model: "LSS", year: 1999 },
  { id: 135, brand: "Dodge", model: "Viper", year: 1999 },
  { id: 136, brand: "Suzuki", model: "Grand Vitara", year: 2011 },
  { id: 137, brand: "Audi", model: "A4", year: 2012 },
  { id: 138, brand: "Maserati", model: "GranTurismo", year: 2011 },
  { id: 139, brand: "Jaguar", model: "X-Type", year: 2007 },
  { id: 140, brand: "Toyota", model: "Tundra", year: 2002 },
  { id: 141, brand: "Volkswagen", model: "Cabriolet", year: 1996 },
  { id: 142, brand: "Dodge", model: "Charger", year: 2007 },
  { id: 143, brand: "Buick", model: "Skylark", year: 1997 },
  { id: 144, brand: "Ford", model: "Ranger", year: 1988 },
  { id: 145, brand: "Hyundai", model: "Azera", year: 2012 },
  { id: 146, brand: "GMC", model: "Yukon", year: 2007 },
  { id: 147, brand: "Mazda", model: "RX-7", year: 1988 },
  { id: 148, brand: "Toyota", model: "Tacoma Xtra", year: 2000 },
  { id: 149, brand: "Chevrolet", model: "Metro", year: 1999 },
  { id: 150, brand: "Cadillac", model: "DeVille", year: 1994 },
  { id: 151, brand: "Mitsubishi", model: "Chariot", year: 1994 },
  { id: 152, brand: "Scion", model: "tC", year: 2005 },
  { id: 153, brand: "Dodge", model: "Stratus", year: 2005 },
  { id: 154, brand: "Chevrolet", model: "Silverado", year: 2002 },
  { id: 155, brand: "Saturn", model: "L-Series", year: 2003 },
  { id: 156, brand: "Nissan", model: "Maxima", year: 2012 },
  { id: 157, brand: "Chevrolet", model: "Prizm", year: 1999 },
  { id: 158, brand: "Honda", model: "Civic", year: 2006 },
  { id: 159, brand: "Mercury", model: "Marauder", year: 2004 },
  { id: 160, brand: "Jeep", model: "Liberty", year: 2007 },
  { id: 161, brand: "Mazda", model: "Miata MX-5", year: 1994 },
  { id: 162, brand: "Ferrari", model: "458 Italia", year: 2011 },
  { id: 163, brand: "Mitsubishi", model: "Pajero", year: 1998 },
  { id: 164, brand: "Alfa Romeo", model: "Spider", year: 1992 },
  { id: 165, brand: "Eagle", model: "Summit", year: 1996 },
  { id: 166, brand: "Jaguar", model: "XK", year: 2008 },
  { id: 167, brand: "Ford", model: "Explorer", year: 2005 },
  { id: 168, brand: "Oldsmobile", model: "Bravada", year: 2003 },
  { id: 169, brand: "Mercedes-Benz", model: "W201", year: 1986 },
  { id: 170, brand: "Suzuki", model: "Sidekick", year: 1991 },
  { id: 171, brand: "BMW", model: "5 Series", year: 1993 },
  { id: 172, brand: "Land Rover", model: "LR3", year: 2006 },
  { id: 173, brand: "Ford", model: "LTD Crown Victoria", year: 1990 },
  { id: 174, brand: "Cadillac", model: "CTS-V", year: 2010 },
  { id: 175, brand: "Buick", model: "Century", year: 1991 },
  { id: 176, brand: "Oldsmobile", model: "Cutlass", year: 1999 },
  { id: 177, brand: "Mitsubishi", model: "Chariot", year: 1987 },
  { id: 178, brand: "Mitsubishi", model: "Pajero", year: 1996 },
  { id: 179, brand: "Mercedes-Benz", model: "C-Class", year: 2007 },
  { id: 180, brand: "Land Rover", model: "Range Rover", year: 2009 },
  { id: 181, brand: "GMC", model: "2500", year: 1996 },
  { id: 182, brand: "Toyota", model: "Celica", year: 2003 },
  { id: 183, brand: "Volkswagen", model: "Jetta", year: 1994 },
  { id: 184, brand: "Mitsubishi", model: "Diamante", year: 1992 },
  { id: 185, brand: "Dodge", model: "Caravan", year: 2009 },
  { id: 186, brand: "Lincoln", model: "Continental", year: 1990 },
  { id: 187, brand: "Mercedes-Benz", model: "CL-Class", year: 1999 },
  { id: 188, brand: "Fairthorpe", model: "Rockette", year: 1960 },
  { id: 189, brand: "GMC", model: "Savana 1500", year: 2005 },
  { id: 190, brand: "Mazda", model: "B2000", year: 1985 },
  { id: 191, brand: "Chevrolet", model: "G-Series G30", year: 1993 },
  { id: 192, brand: "Mercedes-Benz", model: "C-Class", year: 2011 },
  { id: 193, brand: "Chevrolet", model: "Astro", year: 1995 },
  { id: 194, brand: "Audi", model: "A6", year: 2004 },
  { id: 195, brand: "Volkswagen", model: "Type 2", year: 1989 },
  { id: 196, brand: "Toyota", model: "Tacoma", year: 2011 },
];

export default data;
