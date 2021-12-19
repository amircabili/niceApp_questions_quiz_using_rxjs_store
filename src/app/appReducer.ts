// action - json
// type - Mandatory - the action type
// payload - Optiona - some data send to the action

// tslint:disable-next-line:typedef
//export function CounterReducer(state = {count : 0}, action:any )

 export function questionsReducer(state = [], action: { type: any; payload: any; })
{
  switch(action.type)
  {
    case "ADD":
      return [...state, action.payload];

    case 'CLEAR':
      return [];


    default:
      return state;
  }
}


