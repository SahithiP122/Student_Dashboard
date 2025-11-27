package com.project.student.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.student.entity.FeeBill;
import com.project.student.service.FeeBillService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/fee-bills")
@CrossOrigin("*")
@RequiredArgsConstructor
public class FeeBillController {

    private final FeeBillService billService;

    @PostMapping
    public FeeBill addBill(@RequestBody FeeBill bill) {
        return billService.createFeeBill(bill);
    }

    @GetMapping
    public List<FeeBill> getAllBills() {
        return billService.getAll();
    }

    @GetMapping("/student/{studentId}")
    public List<FeeBill> getBillsByStudent(@PathVariable Long studentId) {
        return billService.getBillsForStudent(studentId);
    }
}
