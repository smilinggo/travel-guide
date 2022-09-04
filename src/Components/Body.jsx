import Card from './Card'
import Text from '../Data/text'

const Locations = Text.map(x => {
  return (
    <Card 
      {...x}
    />

  )
})


export default function Body() {
    return (
        <section className="divide-y-2 pt-">
            {Locations}
        </section>
    )
}