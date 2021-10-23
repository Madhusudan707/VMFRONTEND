import React, { useEffect, useState } from 'react';
import { GET_LOCATION_ID_LIST } from '../../../services/graphql/queries/fetchQueries';
import { axiosInstance } from '../../../helper/axiosInstance';
import { getItem } from '../../../storage/cookie';
import locationIcon from '../../../assets/icons/location.svg';
import { useModalClose } from '../../../contexts';
import './searchDropdown.scss';
import { Input, TypoGraphy } from '../';
export const AutoComplete = () => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState('');
  const token = getItem('TOKEN');
  const { setSelectedLocation } = useModalClose();

  useEffect(() => {
    axiosInstance()
      .post(
        '',
        {
          query: GET_LOCATION_ID_LIST,
          variables: {
            searchText: search,
          },
        },
        {
          headers: {
            Authorization: token,
          },
        },
      )
      .then((response) => {
        console.log(response.data.data.searchLocation);
        const location: [] = response.data.data.searchLocation;

        setOptions(location);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);

  const searching = (e: any) => {
    setDisplay(e.target.value ? true : false);
    setSearch(e.target.value);
  };

  const searchSelect = (e: any) => {
    setSearch(e.target.textContent);
    setDisplay(false);
    setSelectedLocation(e.target.textContent.slice(0, 25) + '...');
  };

  return (
    <div
      className=""
      style={{ display: 'flex', flexDirection: 'column', height: '80vh' }}
    >
      <TypoGraphy variant="body1" classname="txt-primary fw-700">
        Abhi ki location
      </TypoGraphy>
      <Input
        className="mb-20 autocomplete"
        icon={locationIcon}
        type="text"
        placeHolderName="area/state/pincode"
        required={true}
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => searching(e)}
      />

      {display && (
        <div className="autoContainer">
          <ul
            onClick={(e: any) => {
              searchSelect(e);
            }}
          >
            {options.map((item: any) => {
              return (
                <li className="search-options">
                  {`${item.area},${item.district},${item.state}-${item.pincode}`}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
