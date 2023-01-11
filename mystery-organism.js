// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
  specimenNum,
  dna,
  mutate() {
    let randElement = Math.floor(Math.random() * 15);
    let randBase = returnRandBase();
    while (this.dna[randElement] === randBase) {
      randBase = returnRandBase();
     }
    this.dna[randElement] = randBase;
    return this.dna;
    },
  compareDNA(pAequor) {
    let sameDNA = [];
    for (i = 0; i < this.dna.length; i++) {
      if (this.dna[i] === pAequor[i]) {
      sameDNA.push(pAequor[i]);
      }
    }
    let percentage = ((sameDNA.length - 1) / pAequor.length) * 100;
    console.log(`Specimen #1 and specimen #2 have ${percentage.toFixed(2)}% DNA in common`);
  },
  willLikelySurvive() {
    let gAndC = [];
    for (i = 0; i < this.dna.length; i++) {
      if ((this.dna[i] === 'G') || (this.dna[i] === 'C')) {
        gAndC.push(this.dna[i]);
      }
    }
    if ((gAndC.length / this.dna.length) >= 0.6) {
      /*console.log(this.dna);
      console.log(gAndC)
      console.log(gAndC.length / this.dna.length)*/
      return true;
    } else {
      /*console.log(this.dna);
      console.log(gAndC);*/
      return false;
    }
   },
  } 
};

 const strand = mockUpStrand();
 const pAequor = mockUpStrand();
 const pStrand = pAequorFactory(1, strand);
 const mutatedStrand = pStrand.mutate();
 //console.log(`Original Strand: ${strand}`);
 //console.log(`Mutated Strand: ${mutatedStrand}`);
 //console.log(pAequor);
 //console.log(pStrand.compareDNA(pAequor));
 //console.log(pStrand.willLikelySurvive());

let survivalStrands = [];
let num = 0;


while (survivalStrands.length < 30) {
  let pAequorSurvivor = pAequorFactory(num, mockUpStrand());
  if (pAequorSurvivor.willLikelySurvive() === true) {
    survivalStrands.push(pAequorSurvivor);
    num++;
  }
};


console.log(survivalStrands);
 
 