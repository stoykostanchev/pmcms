/** Description of the IConfig interface */
export interface IConfig {
  HARDCODED_ITEM_OWNERS?: {
    [key: string]: string,
  },
  ADS_CFG?: {
    [key: string]: {
      // REVIEW THIS SECTION
      oneColumn?: {
        sizeLimit?: number[],
        shouldPlace?: string,
        containerClass?: string,
      },
      twoColumn?: {
        sizeLimit?: number[],
        shouldPlace?: string,
      },
      threeColumn?: {
        sizeLimit?: number[],
        shouldPlace?: string,
      },
      flb?: { [key: string]: string },
      red?: { [key: string]: string },
      sky?: { [key: string]: string },
      mde?: { [key: string]: string },
      nex?: { [key: string]: string },
      // --
    },
  },
  ALLOW_INAPP_BROWSING_DOMAINS?: string[],
  IMGS?: {
    [key: string]: string,
  },
  CLIENT_LOGO?: string,
  MAIN_NAV_BACKGROUND?: string,
  APP?: IAppDetails,
  CHANNELS?: IChannelsConf,
  COMPONENTS?: {
    PODCAST?: {
      messages?: {
        err?: string,
        takingTime?: string,
      },
    },
  },
  PAGES?: {
    TRAVEL_PAGE: {
      TAB_TITLE?: string,
      ENABLED?: boolean,
      OWN_MENU?: boolean,
    },
  },
  CONTENT?: {
    DIRECT_PLAY?: {
      [key: string]: boolean,
    },
    STRETCHED_TILES?: {
      [key: string]: boolean,
    },
  }
  FUNCTIONALITIES?: IFunctionalities,
  ADS?: {
    URLS?: {
      [key: string]: string,
    },
    SHOW_ADS_ON_FEEDLIST?: boolean,
  },
  AD_TYPES?: IAdTypes
  FEED_ADS?: IFeedAds | any // TEMP FIX - config.goview.ts FEED_ADS not honoring interface for some reason,
  TOP_MOVIE_GENRE: string,
  TOP_MOVIE_ICON: string,
  PROVIDER_LOGOS: {[provider: string] : tProviderLogoObj}
}


type tProviderLogoObj = {
  PRIMARY: string
  SECONDARY: string
}

export interface IFeedAds {
  [key: string]: {
    oneColumn?: TypeAdsSlotsContainer,
    twoColumn?: TypeAdsSlotsContainer,
    threeColumn?: TypeAdsSlotsContainer,
  }
}

type TypeAdsSlotsContainer = Array<
  IInhouseAdDefinition | IInhouseAdDefinition[]|
  IDefineGpaAdDefinition | IDefineGpaAdDefinition[]
>

interface IChannelsConf {
  [key: string]: {
    DEF_GENRE: string,
    REMOVE_GENRE_ALL?: boolean,
  }
}

export interface IInhouseAdDefinition {
  id: string
  url: string
  show?: string
  clickLink: string
  cls?: string
  type?: string
}

export interface IDefineGpaAdDefinition {
  adArray: IGPublisherAdSlots[]
  type: string
}

export interface IAppDetails {
  APP_ID?: string,
  APP_LINK?: string,
  ALLOW_APP_STORE_POPUP?: boolean,
  ALLOW_DOWNLOADS?: boolean,
  COMPANY_NAME_SHORT?: string,
  COMPANY_NAME?: string,
  PRODUCT_NAME?: string,
  WIFI_NETWORK_NAME?: string,
  REG_FORM_LINK?: string,
  REG_FORM_LINK_TEXT?: string,
  PRODUCT_ROLL_DATE_STR?: string,
  PRIVACY_POLICY_LINK?: string,
  PRIVACY_POLICY_LINK_TEXT?: string,
  PROD_URL?: string,
  GTM?: string,
  LICENSE_URLS?: {
    [key: string]: string,
  },
  VERSION?: any,
  HARDWARE?: string,
  HARDWARE_LOGIN_DOMAIN?: string, // required in reality. To be changed after the base cfg is an abstract class
  DEF_PAGE_OFFSET?: number,
}

export interface IGPublisherAdSlots {
  slotId: string
  sizes: number[] | number[][],
  tagId: string
  shouldPlace?: string
}

export interface IAdTypes {
  GPT?: string,
  INHOUSE?: string,
}

export interface IFunctionalities {
  AUTH_CHECK?: boolean,
  AWAY_SCREEN?: boolean,
  CONTENT_GENRES_FILTER?: boolean | IContentGenreFilter,
  GLOBAL_INITIAL_VIDEO_AD?: boolean,
  POWERED_BY_LOGO?: boolean,
  LICENCE_CHECK?: boolean,
  CAPACITY_CHECK?: boolean,
  STICKY_FOOTER?: { DELAY?: number } | boolean,
  MENU_MODAL?: boolean,
  BROWSER_DRM?: boolean,
  BACK_TO_APP_BTN?: boolean,
  AGE_CHECK: boolean
}

interface IContentGenreFilter {
  movies: boolean,
  tv: boolean,
}

