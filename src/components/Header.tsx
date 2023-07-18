import { useLoadScript } from '@react-google-maps/api';
import React, { useMemo, useState } from 'react'
import usePlacesAutocomplete, { getLatLng, getGeocode } from 'use-places-autocomplete'
const banner = require('../assets/images/banner.png')


export default function Places() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDhMtuJgfpi9QJIYlFHcUC5Mh7YywWkaco",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <Header />
    </div>
  )
}



export const Header = () => {

  const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
  const [selected, setSelected] = useState(null);


  

  return (
    <div className='object-cover py-[70px] px-0 min-h-[350px] ' style={{
      backgroundImage: `url(${banner})`,
    }}>
      <div className="container max-w-[1170px] mx-auto">
        <form className='relative mb-[70px]' onSubmit={(e) => {
          e.preventDefault();
          console.log(selected);
        }}>
          <PlaceAutoComplete setSelected={setSelected} />

          <input type="submit" value="Bul"
            className='absolute top-[5px] right-[5px] bottom-[5px] py-0 px-10
                          border-none bg-[#009ad8] rounded-[30px] text-white cursor-pointer' />
        </form>
      </div>
    </div>
  )
}

const PlaceAutoComplete = ({ setSelected }: { setSelected: any; }) => {
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
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div className='relative'>
      <input
        className='w-full py-[20px] pl-[20px] pb-[25px]
        bg-[#1e202b] text-white 
         outline-none border-none rounded-[30px]'
        value={value}
        disabled={!ready}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Where are you going?"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}

      {status === 'OK' && <ul
        className='absolute top-[45px] left-0 right-0 z-0
        bg-[#1e202b] text-white
        px-[20px] py-[20px] rounded-[30px] rounded-t-none

        overflow-hidden

        '>{renderSuggestions()}</ul>}
    </div>
  );
};


