//------------------------------------------------------------------
//
// Creates a Food model based upon the passed in specification.
//
//------------------------------------------------------------------
MyGame.objects.Food = function (spec) {
    let api = {
        get size() {
            return spec.size;
        },
        get color() {
            return spec.color;
        },
        get image() {
            return spec.image;
        },
        get center() {
            return spec.center;
        },
        get rotation() {
            return spec.rotation;
        },
        get id() {
            return spec.id;
        },
    };

    return api;
};
