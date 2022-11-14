public with sharing class getCars {
    @AuraEnabled(cacheable=true)
    public static List<Cars__c> getCars(){
     return [SELECT Id,Name,ModelCar__r.Name,Type__c,Price__c,Thumbnail__c FROM Cars__c ORDER BY Name DESC];
}

}