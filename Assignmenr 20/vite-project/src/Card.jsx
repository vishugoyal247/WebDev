import React from 'react'

function Card({ dat }) {
  return (
    <div>
      {/* <img src="https://cdn.discordapp.com/attachments/998995040514883694/1009309434239008799/unknown.png" /> */}
      <img src={dat.image} className="pb-3   " />
      <p className="text-slate-500">{dat.category}</p>
      <h2 className="font-bold text-slate-600">{dat.head}</h2>
      <img src="https://cdn.discordapp.com/attachments/998995040514883694/1009283293155434496/Stars.png" className="h-4" />
      <p className="font-bold text-slate-600">${dat.price}</p>
    </div>
  )
}

export default Card