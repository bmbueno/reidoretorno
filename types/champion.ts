export interface BuildItem {
  riotkey: string
  image: { url: string }
}

export interface RuneStyle {
  id: number
  riotid: string
  name: string
  icon: { url: string }
}

export interface RunePerk {
  id: number
  riotid: string
  name: string
  icon: { url: string }
}

export interface RuneBuild {
  name: string
  primary: RuneStyle
  secondary: RuneStyle
  primaryperks: RunePerk[]
  secondaryperks: RunePerk[]
}

export interface Champion {
  id: number
  documentId: string
  slug: string
  matchup: string
  name: string
  riotkey: string
  image: { url: string }
  spells: Array<{ url: string }>
  build: Array<{ url: string }>
  runes?: {
    primary: {
      style: RuneStyle & { url: string }
      perks: Array<RunePerk & { url: string }>
    }
    secondary: {
      style: RuneStyle & { url: string }
      perks: Array<RunePerk & { url: string }>
    }
  }
}

export interface RawChampion {
  id: number
  documentId: string
  slug: string
  matchup: string
  name: string
  riotkey: string
  image: { url: string }
  spells: Array<{ image: { url: string } }>
  build: Array<BuildItem>
  runebuilds: RuneBuild[]
}
