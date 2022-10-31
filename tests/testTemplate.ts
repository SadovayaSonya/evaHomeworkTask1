import {suite, test} from '@testdeck/mocha';

@suite('test suite')
export class NoShare {

    @test
    'test'() {

        const partName = 'В';
        browser.url('https://cats-ui-eva.tcsbank.ru/all-names');
        $('//input[@placeholder = "Введите часть имени"]').setValue(partName);
        //$('//button[@class = "button"]').click(); // click Search button
        browser.keys("\uE007"); // send Enter keyboard signal
        const namesArray = $$('//span[contains(@class, "tag")]//a');
        const filteredNamesArray = namesArray.filter(element => element.getText().search(/$(partName)/i));
        expect(filteredNamesArray.length).toEqual(namesArray.length);
    }
}
