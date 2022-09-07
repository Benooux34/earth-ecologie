import React from 'react'

function Text() {
  return (
    <div className="absolute top-0 left-0 flex flex-col justify-center items-center h-screen w-[100%] bg-[#1756dd70] z-[100]">
        <h1 className="text-white text-[45px] sm:text-7xl font-bold mb-2 sm:mb-7">Protéger la Planète</h1>
        <h2 className="text-white text-[30px] sm:text-4xl font-semibold mb-4 sm:mb-7">Agissons maintenant !</h2>
        <p className="text-center text-white px-5 sm:px-80">Le réchauffement climatique est un problème majeur posé à l’humanité toute entière. Et la crise s'aggrave. Les émissions mondiales de gaz à effet de serre ne cessent d'augmenter et l’année 2016 est la plus chaude jamais enregistrée. La Terre se réchauffe. Les calottes glaciaires fondent. Les catastrophes climatiques se font plus fréquentes, plus intenses. Les écosystèmes sont menacés et les réfugiés climatiques déjà une réalité.</p>
        <button className="transition-all bg-transparent hover:bg-[#2bcc33] border border-[#2bcc33] border-2 px-8 py-2 rounded-lg mt-7 text-white text-[20px] text-[#2bcc33] hover:text-white">Donation</button>
  </div>
  )
}

export default Text