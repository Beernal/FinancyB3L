public with sharing class OpportunityController {
   @AuraEnabled(cacheable=true)
   public static List<Opportunity> getOportunity(String accountId){
    return [SELECT ID,NAME,StageName FROM Opportunity WHERE AccountId =: accountId ORDER BY CreatedDate DESC];     

}
}