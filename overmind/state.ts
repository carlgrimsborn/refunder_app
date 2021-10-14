
export type RefunderStore = {
  avg_review_score: number
  campaign_types: string[]
  cashback: string
  cashback_description: string
  href: string
  id: string
  logo: string
  name: string
  normal_cashback: string
  normal_cashback_description: string
  normal_cashback_value: string
  num_reviews: any
  short_description: string
}

type State = {
  token: string | null;
  isLoggedIn : boolean
  stores: RefunderStore[] | null
};

export const state: State = {
  token: null,
  isLoggedIn: false,
  stores: null
};
