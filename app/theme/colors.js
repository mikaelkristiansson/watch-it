const app = {
    background: '#151C25',//'#49477A',
    cardBackground: '#151C25',
    listItemBackground: '#FFFFFF',
    linearColor: '#151C25',
    linearColorOpacity: 'rgba(21, 28, 37,.7)',
    detailBackground: '#151C25',
  };
    
  const brand = {
    brand: {
      primary: '#FECA13',//'#0E4EF8',
      secondary: '#e31b23'//'#17233D',
    },
  };
    
  const text = {
    textPrimary: '#15182D',//'#222222',
    textSecondary: '#BABDC2',//'#777777',
    textThirdly: '#D0D1D5',
    headingPrimary: brand.brand.primary,
    headingSecondary: brand.brand.primary,
  };
    
  const borders = {
    border: '#D0D1D5',
  };

  const topBar = {
    topbar: {
      background: 'rgba(21, 28, 37,.7)',
      title: '#fff'
    }
  };
    
  const tabbar = {
    tabbar: {
      background: 'rgba(21, 28, 37,.7)',//'#151C25',//'#ffffff',
      border: 'rgba(21, 28, 37,.7)',//'#151C25',
      iconDefault: '#9a9ca0', //'#333'
      iconSelected: '#fff',
    },
  };
  
  const indicator = {
    spinner: brand.brand.primaryOpacity,
    launch: '#fff'
  };
  
    
  export default {
    ...app,
    ...brand,
    ...text,
    ...borders,
    ...topBar,
    ...tabbar,
    ...indicator,
  };