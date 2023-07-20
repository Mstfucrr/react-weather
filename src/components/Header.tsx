import { useLoadScript } from '@react-google-maps/api';
import usePlacesAutocomplete, { getLatLng, getGeocode } from 'use-places-autocomplete'
import { motion } from 'framer-motion'
const banner = require('../assets/images/banner.png')

export default function Places({ setSelected }: any) {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY as string,
    libraries: ["places"],
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <Header setSelected={setSelected} />
    </div>
  )
}

export const Header = ({ setSelected }: any) => {

  return (
    <div className='object-cover py-[70px] px-0 min-h-[350px] ' style={{
      backgroundImage: `url(${banner})`,
    }}>
      <div className="container max-w-[1170px] mx-auto">
        <form className='relative mb-[70px]' onSubmit={(e) => {
          e.preventDefault();
        }}>
          <PlaceAutoComplete setSelected={setSelected} />

          {/* <input type="submit" value="Bul"
            className='absolute top-[5px] right-[5px] bottom-[5px] py-0 px-10
                      border-none bg-[#009ad8] rounded-[30px] text-white cursor-pointer
                      hover:bg-[#0082b0] transition-all duration-300 ease-in-out
                      hover:scale-x-[1.14] hover:scale-y-[1.22]' /> */}
        </form>
      </div>
    </div>
  )
}

const PlaceAutoComplete = ({ setSelected }: any) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.45, lng: () => -80.49 } as any,
      radius: 200 * 1000,
    },
  });

  const handleSelect = ({ description }: { description: any; }) => () => {

    setValue(description, false);
    clearSuggestions();

    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        setSelected({ lat, lng });
        console.log('📍 Coordinates: ', { lat, lng })
      }
      )
      .catch((error) => {
        console.log('😱 Error: ', error);
      }
      );

  }

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;
      // sadece lat ve lngı olanları alıyoruz
      suggestion.terms = suggestion.terms.filter((term: any) => term.offset === 0);


      return (
        <li key={place_id} onClick={handleSelect(suggestion)}
          className='py-[10px] px-[20px] cursor-pointer hover:bg-[#009ad8]
          transition-all duration-300 ease-in-out
          hover:text-white hover:font-bold
          rounded-[30px]
          '
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div className='relative'>
      <motion.input
        className='w-full py-[20px] pl-[20px] pb-[25px]
      bg-[#1e202b] text-white
      outline-none border-none rounded-[30px]'
      value={value}
      disabled={!ready}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Enter your address"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onClick={() => {
        setValue('')
      }}

      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}

      {status === 'OK' && <ul
        className='absolute top-[45px] left-0 right-0 z-40
        bg-[#1e202b] text-white
        px-[20px] py-[20px] rounded-[30px] rounded-t-none

        overflow-hidden

        '>{renderSuggestions()}</ul>}
    </div>
  );
};


