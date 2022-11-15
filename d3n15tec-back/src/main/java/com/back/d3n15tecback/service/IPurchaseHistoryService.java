package com.back.d3n15tecback.service;

import com.back.d3n15tecback.model.PurchaseHistory;
import com.back.d3n15tecback.repository.projection.IPurchaseItem;

import java.util.List;

public interface IPurchaseHistoryService
{
    PurchaseHistory savePurchaseHistory(PurchaseHistory purchaseHistory);

    List<IPurchaseItem> findPurchasedItemsOfUser(Long userId);
}
