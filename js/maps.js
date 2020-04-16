document.addEventListener('DOMContentLoaded', function () {
    ymaps.ready(init);

    function init() {
        let myMap = new ymaps.Map("yandex_map", {center: [45.102312, 38.984556],
                zoom: 16
            }),

            // Создаем геообъект с типом геометрии "Точка".
            myGeoObject = new ymaps.GeoObject({
                // Опции.
                // Иконка метки будет растягиваться под размер ее содержимого.
                preset: 'islands#blackStretchyIcon',
                // Метку можно перемещать.
                draggable: false
            }),
            mark = new ymaps.Placemark([45.102312, 38.984556], {
                iconCaption: 'Ай, Да Праздник!'
            },);

        myMap.behaviors.disable('scrollZoom');

        myMap.geoObjects
            .add(myGeoObject)
            .add(mark)

    }
});
