// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
    //addFood(steak[i], '#steak');
    console.log(mashPotatoes[i]);
}

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
    addFood(steak[1], '#steak', () => {
        addFood(steak[2], '#steak', () => {
            addFood(steak[3], '#steak', () => {
                addFood(steak[4], '#steak', () => {
                    addFood(steak[5], '#steak', () => {
                        addFood(steak[6], '#steak', () => {
                            addFood(steak[7], '#steak', () => {
                                console.log('list is finished');
                            });
                        });
                    });
                });
            });
        });
    });
});

// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
    addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
            addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
                addFood(mashPotatoes[4], '#mashPotatoes');
            });
        });
    });
});

// Iteration 3 using async and await

async function makeFood(step, foodType) {
    // try {
    //     await Promise.all([
    //        new Promise () => addFood(brusselSprouts[0], '#brusselSprout'),
    //         new Promise() => addFood(brusselSprouts[1], '#brusselSprout'),
    //         new Promise() => addFood(brusselSprouts[2], '#brusselSprout'),
    //         new Promise() => addFood(brusselSprouts[3], '#brusselSprout'),
    //         new Promise() => addFood(brusselSprouts[4], '#brusselSprout'),
    //         new Promise() => addFood(brusselSprouts[5], '#brusselSprout'),
    //         new Promise() => addFood(brusselSprouts[6], '#brusselSprout'),
    //        new Promise () => addFood(brusselSprouts[7], '#brusselSprout'),
    //        new Promise () => addFood(brusselSprouts[8], '#brusselSprout'),
    //     ]);
    // } catch (err) {
    //     console.log('err', err);
    // }

    for (let eachStep = 0; eachStep < step.length; eachStep++) {
        await addFood(step[eachStep], foodType);
    }
}
makeFood(brusselSprouts, '#brusselSprouts');
