package com.back.d3n15tecback.repository.projection;

import java.time.LocalDateTime;

public interface IPurchaseItem
{
    String getTitle();
    Double getPrice();
    LocalDateTime getPurchaseTime();
}
