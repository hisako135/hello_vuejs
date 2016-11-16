var mwRatingMsg = {
    data: function () {
        return {
            mwRatingMsg: {
                flg: false,
                style: {
                    top: null
                }
            }
        }
    },
    events: {
        _showRatingMsg: function () {
            var vu = this;
            vu.mwRatingMsg.flg = true;
            vu.$set('mwRatingMsg.style.top', window.pageYOffset + 'px');
        },
        _closeRatingMsg: function() {
            var vu = this;
            vu.mwRatingMsg.flg = false;
        }
    }
};
