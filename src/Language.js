
    import React, { useEffect } from 'react'
    import { useTranslation } from 'react-i18next'
    import i18next from 'i18next'
    import cookies from 'js-cookie'
    import { Dropdown } from 'semantic-ui-react'


const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
  },
  {
    key: 'Christian',
    text: 'Christian',
    value: 'Christian',
    image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
  },
]



    const Arabic = () => <div onClick={() => {i18next.changeLanguage("ar")}}>
      العربية
    </div>

    const English = () => <div onClick={() => {i18next.changeLanguage("en")}}>
    English
    </div>

    const Franch = () => <div onClick={() => {i18next.changeLanguage("fr")}}>
      Français
    </div>

   

    const languages = [
      {key: '222',
        code: 'en',
        text: English,
        value: 'English',
        name: 'English',
        country_code: 'gb',
        image: {  src: 'https://www.countryflags.io/us/flat/32.png' },
      },
      {
        key: '111',
        code: 'fr',
        text: Franch,
        value: 'Français',
        country_code: 'fr',
        name: 'Français',
        image: { src: 'https://www.countryflags.io/fr/flat/32.png' },
      },
      {key: '333',
        code: 'ar',
        text: Arabic,
        value: 'العربية',
        // dir: 'rtl',
        country_code: 'sa',
        name: 'العربية',
        image: { src: 'https://www.countryflags.io/sa/flat/32.png' },
      },
    ]
    

   

    export default function Language() {
      const currentLanguageCode = cookies.get('i18next') || 'en'
      const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
      const { t } = useTranslation()
    
      useEffect(() => {
        console.log('Setting page stuff')
        document.body.dir = currentLanguage.dir || 'ltr'
        document.title = t('app_title')
      }, [currentLanguage, t])
    

      return (
        <div className="">
          <div className="language-select">
            <div className="d-flex justify-content-end align-items-center language-select-root">
              <div className="dropdown">

                  {/* <span>
                  <Dropdown
                    inline
                    options={languages}
                    defaultValue={currentLanguageCode==="en" && languages[1].value
                                 || currentLanguageCode==="ar" && languages[2].value
                                 ||currentLanguageCode==="fr" && languages[0].value}
                  />
                  </span> */}
                



                  <Dropdown
                    style={{color:"#5A6AF0", marginTop:"9px", backgroundColor:"#F7F8FD", padding:"5px 12px 5px 12px", borderRadius:"15px", fontWeight:"100"}}
                    // button
                    inline
                    className='icon'
                    floating
                    labeled
                    icon='world'
                    // icon={currentLanguageCode==="en" && <img src="https://www.countryflags.io/us/flat/32.png" alt="" />
                    // || currentLanguageCode==="ar" && <img src="https://www.countryflags.io/us/flat/32.png" alt=""/>
                    // ||currentLanguageCode==="fr" && <img src="https://www.countryflags.io/us/flat/32.png" alt=""/>
                    //  }
                    options={languages}
                    search
                    text={currentLanguageCode==="en" && languages[0].value
                    || currentLanguageCode==="ar" && languages[2].value
                    ||currentLanguageCode==="fr" && languages[1].value}
                  />






                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }
    
