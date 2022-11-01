public with sharing class OpportunityController {
   @AuraEnabled(cacheable=true)
   public static List<Opportunity> getOportunity(String accountId){
    return [SELECT Id,Name,StageName FROM Opportunity WHERE AccountId =: accountId ORDER BY CreatedDate DESC];     

}
}