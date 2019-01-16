export default class LocalStoreData{
    store(data){
        data = JSON.stringify(data);
        localStorage.setItem('data', data);
    }

    fetch(){
        return JSON.parse(localStorage.getItem('data'));
    }
}