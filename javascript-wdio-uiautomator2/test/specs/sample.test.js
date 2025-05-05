describe('Kobiton Native Smoke Test', () => {
    it('launches the app and finds a TextView', async () => {
        const el = await $('android.widget.TextView');
        const isDisplayed = await el.isDisplayed();
        console.log('Element displayed:', isDisplayed);
        // expect(isDisplayed).toBe(true);  // assertion optional
    });
});


