import styled from 'styled-components'
import ItemImage from '@/components/atoms/ItemImage'

interface ItemImageRowProps {
  items: Array<{ url: string }>
  label: string
}

const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`

export default function ItemImageRow({ items, label }: ItemImageRowProps) {
  return (
    <Row>
      {items.map((item, index) => (
        <ItemImage key={index} src={item.url} alt={`${label} ${index + 1}`} />
      ))}
    </Row>
  )
}
