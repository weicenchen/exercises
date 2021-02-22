import Immutable from 'immutable';
import { setLoading } from '../reducers/LoadingReducer';
import { setProductList } from '../reducers/ProductListReducer';

export const queryProductListAction = (userName) => (dispatch) => {
  // const productListFromState = state.getIn(['ProductListReducer', 'productList']);

  const productListManager = [
    {
      id: 12345,
      name: 'Manager01',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP._3NUnyDKf3SL6bMuTWYbkgHaHa%26pid%3DApi&f=1',
      price: 1000,
    },
    {
      id: 23456,
      name: 'Manager02',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F9%2F96%2FArno_Walter_2017.jpg&f=1&nofb=1',
      price: 2000,
    },
    {
      id: 34567,
      name: 'Manager03',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.projectsmart.co.uk%2Fimg%2Fexcellent-manager.png&f=1&nofb=1',
      price: 3000,
    },
  ];
  const productListMember = [
    {
      id: 12345,
      name: 'Member01',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.australiansolarquotes.com.au%2Fwp-content%2Fuploads%2F2014%2F12%2Femployee.jpg&f=1&nofb=1',
      price: 1000,
    },
    {
      id: 23456,
      name: 'Member02',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.incimages.com%2Fuploaded_files%2Fimage%2F970x450%2Fdisgruntled-employee-panoramic_17655.jpg&f=1&nofb=1',
      price: 2000,
    },
    {
      id: 34567,
      name: 'Member03',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.snacknation.com%2Fwp-content%2Fuploads%2F2019%2F02%2Fdrivers-of-employee-engagement_welfare.jpg&f=1&nofb=1',
      price: 3000,
    },
  ];
  const productListDefault = [
    {
      id: 12345,
      name: 'DefaultProduct01',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.nycresistor.com%2Fwp-content%2Fuploads%2F2016%2F03%2FReact.js_logo.svg_.png&f=1&nofb=1',
      price: 1000,
    },
    {
      id: 23456,
      name: 'DefaultProduct02',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fblog.js-republic.com%2Fwp-content%2Fuploads%2F2016%2F11%2Flogo-redux.png&f=1&nofb=1',
      price: 2000,
    },
    {
      id: 34567,
      name: 'DefaultProduct03',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjquery-plugins.net%2Fimage%2Fplugin%2Fimmutable-collections-for-javascript.png&f=1&nofb=1',
      price: 3000,
    },
  ];

  dispatch(setLoading(true));
  fetch('/test_case', { method: 'GET' })
    .then((response) => response.json()).then((res) => {
      console.log(res);
    });
  setTimeout(() => {
    if (userName === 'Manager') {
      dispatch(setProductList(Immutable.fromJS(productListManager)));
    } else if (userName === 'Member') {
      dispatch(setProductList(Immutable.fromJS(productListMember)));
    } else {
      dispatch(setProductList(Immutable.fromJS(productListDefault)));
    }

    dispatch(setLoading(false));
  }, 3000);
};

export default queryProductListAction;
