import Colors from './colors';

export default {
  container : {
    flex: 1,
    backgroundColor: Colors.background,
  },
  // HEADER
  headerStyle: {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.topbar.background,
    borderBottomWidth: 0,
    height: 30
  },
  listView: {
    paddingTop: 50,
    backgroundColor: Colors.background
  },
  linearGradiant : {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    zIndex: 2,
    transform: [
      {
        rotate: '180deg'
      }
    ]
  },
  cardItem : {
    backgroundColor: Colors.cardBackground,
    padding: 0,
    height: 240,
    margin: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 2
  },
  cardImage : {
    height: 240,
    resizeMode: 'cover'
  },
  cardInfoHolder : {
    position: 'absolute',
    width: '100%',
    height: '30%',
    bottom: 0,
    zIndex: 3,
    backgroundColor: 'transparent'
  },
  cardTextHolder : {
    flexDirection: 'row',
    padding: 10,
    paddingBottom: 0
  },
  cardTitle : {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: 20,
    fontFamily: 'dosis-bold'
  },
  cardDate : {
    fontSize: 12,
    color: '#f9f9f9',
    lineHeight: 20,
    paddingLeft: 5,
    fontFamily: 'dosis-regular'
  },
  starIcon : {
    paddingLeft: 10
  },
  iconText : {
    position: 'absolute',
    width: 50,
    height: 50,
    textAlign: 'center',
    top: 10,
    fontSize: 9,
    fontFamily: 'dosis-bold'
  },
  // DETAIL SCREEN
  detail: {
    backgroundColor: Colors.detailBackground,
    flex: 1,
  },
  movieTitle: {
    color: '#fff', 
    fontSize: 23, 
    fontFamily: 'dosis-extraBold', 
    padding: 10
  },
  genreText: {
    color: '#fff',
    fontSize: 12,
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: 'rgba(255,255,255,.1)',
    overflow: 'hidden',
    borderRadius: 13,
    margin: 5,
    marginLeft: 0,
    marginRight: 10
  },
  movieText: {
    color: '#fff',
  },
  movieSubText: {
    color: '#999',
    fontSize: 11,
    paddingBottom: 5
  },
  movieDescription: {
    fontFamily: 'dosis-bold',
    fontSize: 16
  },
  movieH2: {
    fontFamily: 'dosis-bold',
    fontSize: 14,
    color: '#606879',
    paddingTop: 20,
    paddingBottom: 10
  },
  // ACTOR
  actorHolder: {
    marginLeft: 10, 
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1
  },
  actorImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },
  actorNames: {
    position: 'absolute',
    width: '100%',
    left: 5,
    bottom: 10,
    backgroundColor: 'transparent',
    zIndex: 3,
  },
  actorName: {
    fontFamily: 'dosis-bold',
    color: '#fff',
    fontSize: 11,
  },
  actorChar: {
    fontFamily: 'dosis-bold',
    color: '#999',
    fontSize: 11,
  },
  // SAVED
  savedCardHolder: {
    flexDirection: 'row', 
    backgroundColor: 'rgba(255,255,255,.1)',
    margin: 15,
    marginRight: 0,
    marginLeft: 0,
    height: 150
  },
  savedImage: {
    height: 160,
    width: 120,
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
    marginTop: -10,
    borderRadius: 3
  },
  savedTextHolder: {
    padding: 10
  },
  savedTitle: {
    fontSize: 16,
    fontFamily: 'dosis-medium',
    color: '#fff'
  }
}