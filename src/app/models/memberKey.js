angular.module('proton.models.memberKeys', [])

.factory('MemberKey', ($http, url) => {
    return {
        // POST
        /**
         * Create new member key
         * @param {Object} Obj
         * @return {Promise}
         */
        create(Obj) {
            return $http.post(url.get() + '/memberkeys', Obj);
        },
        /**
         * Update member key priority
         * @param {Object} Obj
         * @return {Promise}
         */
        order(Obj) {
            return $http.post(url.get() + '/memberkeys/order', Obj);
        },
        // PUT
        /**
         * Update part of key or entire key, updating
         * @param {String} keyID
         * @param {Object} Obj
         * @return {Promise}
         */
        update(keyID, Obj) {
            return $http.put(url.get() + '/memberkeys' + keyID, Obj);
        },
        // DELETE
        /**
         * Update member key priority
         * @param {String} keyID
         * @return {Promise}
         */
        delete(keyID) {
            return $http.delete(url.get() + '/memberkeys/' + keyID);
        }
    };
});
